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
- NOW Understand page/block data saving workflow
  :LOGBOOK:
  CLOCK: [2022-07-02 Sat 00:30:54]
  :END:
	- **cases**
		- When a new page is created
			- Using `frontend.handler.page/create!` to create new pages
				- if page does not exist, compose the datoms and transact!
		- Read a page
			-
		- When a block is saved
		- When a block is deleted