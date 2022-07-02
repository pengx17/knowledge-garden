title:: Logseq whiteboard with tldraw/save as logseq block
icon:: 🤨

- Goal: make a whiteboard `.tldr` be represented by a Logseq page?
- Save as `.md` or `.org` (start with `md` first)
- Should reuse mldoc logic (no special syntax required)
- Need hidden page/block properties to make sure
	- can be correctly loaded as tldraw file
	- can be filtered out for non-related quries?
- Page properties
	- identify it is a tldraw file
	- stores bindings info etc
- Block properties
	- shape id, type and other metadata
	- handles etc
- Block may not have children and have to be at the top level
- ---
- DONE Understand page/block data saving workflow
  :LOGBOOK:
  CLOCK: [2022-07-02 Sat 00:30:54]--[2022-07-02 Sat 18:51:13] =>  18:20:19
  :END:
	- **cases**
		- When a new page is created
			- Using `frontend.handler.page/create!` to create new pages
				- if page does not exist, compose the datoms and transact!
		- Read a page
		- When a block is saved
		- When a block is deleted
- Should we reuse page handlers as much as possible, or create a dedicated workflow for Whiteboard?
	- When **reusing page handlers**, we will
		- create whiteboards under `/pages`
		- When rendering the whiteboard page, we should also show the Whiteboard page name and allows the user to change the name.
		- whiteboard page is a **superset of a normal page**
			- **page properties** to store
				- tldraw specific values, like bindings
			- **blocks of whiteboard page** are _shapes_ of the whiteboard
				- each block has a set of  properties for Tldraw
					- shape id, type and other metadata
					- handles etc
				- Block may not have children and **have to be at the top level**
		- Whiteboard link can be written as `[[whiteboard-link]]`
			- when visiting this link, we will need to redirect the route to the Whiteboard instead
			- the preview of whiteboard link may be disabled for now. We can add some custom styles to it
		- **Pros**
			- page can read whiteboard references just by their name
			- simplifies the routines of tldraw file CRUD
		- **Cons**
			- a normal page cannot be opened as a whiteboard normally. This means we may need to patch many different places when embraced whiteboard
				-
				-