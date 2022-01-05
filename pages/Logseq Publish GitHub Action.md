Repo:: [pengx17/logseq-publish](https://github.com/pengx17/logseq-publish)

- ## Some backgrounds of implementing the GitHub Action
	- There are some good public knowledge gardens that are powered by Logseq already. To list a few:
		- https://zhanghanduo.com/
		- https://note.xuanwo.io/
		- [Logseq's official document](https://logseq.github.io/)
		  id:: 61d5b000-04ce-4725-8f39-3381afaf4ee7
	- Until today - [[Wed, 2022/01/05]], the user needs to [follow the instructions](https://docs.logseq.com/#/page/Publishing%20(Desktop%20App%20Only)) on ((61d5b000-04ce-4725-8f39-3381afaf4ee7)).
		- Imagine a normal user who uses GitHub Repo to sync his Logseq graph and use GitHub Pages or Vercel to host it. An example of the git repo's folder may structure like this:
			- ```
			  ├── assets
			  ├── draws
			  ├── logseq
			  ├── pages
			  └── www
			  ```
				- `logseq`/`asset`/`pages` etc contains the normal graph files
				- `www` contains the public assets of the page, which is picked up by GitHub Pages or Vercel
		- in a daily workflow basis, the user needs to
			- be on the Desktop App
			- take some notes (don't forget to mark related pages as public, or mark all pages as public)
			- remove old `www` folder
			- ==export pages as a static website==
			  id:: 61d5b13f-8c3c-4434-b112-f55e6275bef1
				- click the three dots in the top-right of menu bar
				- click "export graph"
				- click "Export public pages" to `www`
			- commit the generated assets & push to GitHub
			- if Vercel is configured correctly, the new pages will be deployed soon
		- The issue about this approach is that we can only do ((61d5b13f-8c3c-4434-b112-f55e6275bef1)) manually.
			- If I published a page and then found there are some notes need correction, we need to go over the tedious steps again. 🤦
- ## A failed attempt on Logseq Publish CLI
	- People in the Logseq Discord channel is already asking if Logseq has a CLI to do this.
		- The team replies that this is on their roadmap
		- but it has no ETA and I think this is not a high priority task to the Logseq team yet.
	- Maybe it can be started right now to drive by the devs in the community.
		- I found it interesting and attempted to port the graph load & export in using Node.js a while ago, but failed for some reasons
			- I am not that familiar with ClojureScript and the actual workflow of how graph files are loaded(parse to tokens, AST with block hierarchy) and exported seems very complex
			- Logseq is changing in a fast pace. Maintaining it also take a lot of efforts and I may not get the *right* results an way.
			- The ROI (Return on investment) is very low IMHO
		- Because of this, I retreated from porting the graph loading & exporting and seeking other solutions.
- ## Publish with Headless Logseq Desktop App
	- Logseq desktop is running in Electron. So I suppose if I can
		- run Logseq desktop app headlessly
		- drive it with an automation tool
		  id:: 61d5c1bc-e545-418d-a677-5f4c53ccaf8c
		- then the problem should have been fixed.
	- This approach was very simple in theory, but I got stuck immediately on ((61d5c1bc-e545-418d-a677-5f4c53ccaf8c)) step.
		- The only tool I tried is Cypress, because I knew how to use it and it has becomes a standard on e2e testing for the Web
		- However, it seems Cypress does not support testing Electron Apps (Logseq is powered by Electron) yet.
	- Then few months later, I found a change by the new Logseq's team member [[Mono Wang]] that he **used Playwright to replace Cypress** to test the Desktop App
		- {{tweet https://twitter.com/tiensonqin/status/1463784645447667715}}
		- WOW, I did not expect Playwright has this ability! Good job Microsoft!
	- TODO why docker
	- TODO how to fix Electron's open dir dialog issue
	- TODO GitHub Action
	- TODO without GitHub Action
-
-
-
-