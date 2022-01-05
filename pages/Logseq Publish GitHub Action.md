Repo:: [pengx17/logseq-publish](https://github.com/pengx17/logseq-publish)

- Some backgrounds of implementing the GitHub Action
  background-color:: #497d46
	- There are some good public knowledge gardens that are powered by Logseq already. To list a few:
		- https://zhanghanduo.com/
		- https://note.xuanwo.io/
		- [Logseq's official document](https://logseq.github.io/)
		  id:: 61d5b000-04ce-4725-8f39-3381afaf4ee7
	- Until today - [[Wed, 2022/01/05]], the user needs to [follow the instructions](https://docs.logseq.com/#/page/Publishing%20(Desktop%20App%20Only)) on ((61d5b000-04ce-4725-8f39-3381afaf4ee7)).
		- Imagine a normal user who uses GitHub Repo to sync his Logseq graph and use GitHub Pages or Vercel to host it. The folder structure may like this:
			- <pre><>
		- in a daily workflow basis:
			- be on the Desktop App
			- take some notes (don't forget to mark related pages as public, or mark all pages as public)
			- remove old
			- **export pages as a static website**
			  id:: 61d5b13f-8c3c-4434-b112-f55e6275bef1
				- click the three dots in the top-right of menu bar
				- click "export graph"
				- click "Export public pages"
			- commit the generated assets & push to GitHub
			- if Vercel is configured correctly, the new pages will be deployed soon
		- The issue about this approach is that we can only do ((61d5b13f-8c3c-4434-b112-f55e6275bef1)) manually.
			- If I published a page and then found there are some notes need correction, we need to do
			-
-
-
-