Repo:: [pengx17/logseq-publish](https://github.com/pengx17/logseq-publish)

- ## Some backgrounds of implementing the GitHub Action
  collapsed:: true
  - There are some good public knowledge gardens that are powered by Logseq already that you can find on the Web. To list a few:
    - https://zhanghanduo.com/
    - https://note.xuanwo.io/
    - [Logseq's official document](https://logseq.github.io/)
      id:: 61d5b000-04ce-4725-8f39-3381afaf4ee7
  - Imagine a normal user who uses GitHub Repo to sync his Logseq graph and use **GitHub Pages** to host it.
    - the git repo's folder may structure like this. e.g., https://github.com/pengx17/knowledge-garden
    - ```
      ├── assets
      ├── draws
      ├── logseq
      ├── pages
      └── www
      ```
      - `logseq`/`asset`/`pages` etc contains the normal graph files
      - `www` contains the public assets of the page, which is picked up by GitHub Pages
        - it is also possible if the user publish `www` to `gh-pages` branch
    - in a daily workflow, the user needs to [follow the instructions](<https://docs.logseq.com/#/page/Publishing%20(Desktop%20App%20Only)>) on ((61d5b000-04ce-4725-8f39-3381afaf4ee7)) to publish his graph
      - be on the Desktop App
      - take some notes (don't forget to mark related pages as public, or mark all pages as public)
      - remove old `www` folder
      - ==export pages as a static website==
        id:: 61d5b13f-8c3c-4434-b112-f55e6275bef1
        - click the three dots in the top-right of menu bar
        - click "export graph"
        - click "Export public pages" to `www`
      - commit the generated assets & push to GitHub
      - if GitHub Pages is configured correctly, the new pages will be deployed soon
    - The issue about this approach is that we can only do ((61d5b13f-8c3c-4434-b112-f55e6275bef1)) **manually**.
      - If I published a page and then found there are some notes need correction, he needs to go over the tedious steps again. 🤦
- ## A failed attempt on Logseq Publish CLI
  - People in the [Logseq Discord channel](https://discord.gg/KpN4eHY) is asking if Logseq can provide a CLI to do this in a shell script.
    - The team replies that this is on their roadmap, but no ETA
    - I think this is not a high priority task to the Logseq team yet
  - Maybe it can be started right now to drive by the devs in the community.
    - I found it interesting and attempted to port the graph load & export in using Node.js a while ago, but failed for some reasons
      - I am not that familiar with [[ClojureScript]] and the codes of how graph files are loaded(parse to tokens, AST with block hierarchy etc) and exported seems very complex
      - Logseq is changing in a fast pace. Maintaining it also take a lot of efforts and I may not get the _right_ results anyway.
      - The ROI (Return on investment) is very low IMHO
    - Because of this, I retreated from porting the graph loading & exporting and seeking other solutions.
- ## Publish with Headless Logseq Desktop App?
  - Logseq desktop is running in Electron. So I suppose if I can
    - run Logseq desktop app headlessly
    - drive it with an automation tool
      id:: 61d5c1bc-e545-418d-a677-5f4c53ccaf8c
      - let the automation tool to drive Logseq app and publish the graph
  - This approach was very simple in theory, but I got stuck immediately on ((61d5c1bc-e545-418d-a677-5f4c53ccaf8c)) step.
    - The only tool I tried is [[Cypress]], because it was the tool I knew and it seems to be an industry standard on e2e testing for the Web
    - However, Cypress does not support testing Electron Apps (Logseq is powered by Electron) _yet_. #[[Cypress with Electron]]
  - Then few months later, in the following tweet, I found a change by the new Logseq's team member [[Mono Wang]] that he **used [[Playwright]] to replace Cypress** to test the Desktop App
    - {{tweet https://twitter.com/tiensonqin/status/1463784645447667715}}
    - WOW, I did not expect Playwright has this ability! Good job **Microsoft**!
      - My expectation to Playwright was that it is a universal solution to drive popular browsers including Chromium based browsers, Firefox and Safari
      - I did not expect it also has the ability to [automate Electron](https://playwright.dev/docs/api/class-electron)

---

- ## Releasing of [[pengx17/logseq-publish]]
  - In a few more tries with the new approach , I managed to publish [[pengx17/logseq-publish]] on the last day of 2021
  - One last missing part is that we need to **bypass Electron's open dir dialog when running with Playwright** in Logseq
    - patched by https://github.com/logseq/logseq/pull/3531
      - with this patch, we can also add e2e tests to testing graph load & publish cases
    - when the browser context has a `__MOCKED_OPEN_DIR_PATH__` flag, the open dir dialog will not show, but use this mocked directory directly.
  - The publish script is running in a Docker image build step
    - The reason of using Docker is because of its portability
    - There are two images
      - [Dockerfile](https://github.com/pengx17/logseq-publish/blob/main/Dockerfile) prepare for `Docker.exec`.
        - build Logseq desktop app
          id:: 61d7a4e2-2598-45bb-bb24-510f694c4afa
        - prepare for playwright
      - [Dockerfile.exec](https://github.com/pengx17/logseq-publish/blob/main/Dockerfile.exec) to run ((61d70a4d-a7e4-4888-96ab-f5a02b0f3f50))
    - Why two docker images?
      - ((61d7a4e2-2598-45bb-bb24-510f694c4afa)) takes ~12 mins.
        - We can pre-build it and publish it to [ghcr.io](ghcr.io). So that the user can build his graph in `Docker.exec` directly without building Logseq App from the beginning.
      - As a result, the time of exporting this graph only takes _2 mins_ in a GitHub Action.
  - `publish.mjs`
    id:: 61d70a4d-a7e4-4888-96ab-f5a02b0f3f50
    - use Playwright to automate the Logseq App to load the given input graph dir
    - set `window.__MOCKED_OPEN_DIR_PATH__` to the current working dir (e.g., `./graph`) when load the graph
    - after graph loaded, go to export it by set `window__MOCKED_OPEN_DIR_PATH__` to `./graph-www`
  - The main body of [[GitHub Action]] is just a shell script that will
    - download [Dockerfile.exec](https://github.com/pengx17/logseq-publish/blob/main/Dockerfile.exec) to the user's graph root
    - build the docker image
      - As a result, the public assets will be in the image snapshot
    - copy the public assets from the docker container to the destination folder
    - to deploy your pages, you can then pipe the result with [github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action)
  - A complete workflow example for this graph
    - ```yml
      # This is a basic workflow to help you get started with Actions

      name: CI

      # Controls when the workflow will run
      on:
        push:
          branches: [main]

        # Allows you to run this workflow manually from the Actions tab
        workflow_dispatch:

      # A workflow run is made up of one or more jobs that can run sequentially or in parallel
      jobs:
        # This workflow contains a single job called "build"
        build:
          # The type of runner that the job will run on
          runs-on: ubuntu-latest

          # Steps represent a sequence of tasks that will be executed as part of the job
          steps:
            # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
            - uses: actions/checkout@v2
            - name: Logseq Publish 🚩
              uses: pengx17/logseq-publish@0.1.0
            - name: add a nojekyll file
              run: touch $GITHUB_WORKSPACE/www/.nojekyll
            - name: Deploy 🚀
              uses: JamesIves/github-pages-deploy-action@4.1.9
              with:
                branch: gh-pages # The branch the action should deploy to.
                folder: www # The folder the action should deploy.
                clean: true
      ```
-
- As of [[Thu, 2022/01/06]], Logseq's official Docs is already using this action to publish the docs!
  - {{tweet https://twitter.com/logseq/status/1479115586437222405}}
- [[Mon, 2022/01/10]]
  - Contributor [[Xuanwo]] and reported some publish issues
  - DONE Should have a better way to determine the timing when publish is finished
-
-
-
- [[Tue, 2022/03/08]]
  - Edit the custom.css file failed in https://github.com/pengx17/logseq-publish/issues/19
    - Seems the custom.css file is owned by `root` user
      - github action runs with `runner` user
      - https://www.baeldung.com/linux/redirect-output-permission-denied
    - Fixed by change file permission owners to `runner` in a following step
-
- Debugging
  - when downloaded the `trace` file from artifacts, make sure unzip it first using `unzip` on Mac
    - Using default Mac unzip in finder will recursively unzip a zip file if there is only one zip file, until no zip file found
