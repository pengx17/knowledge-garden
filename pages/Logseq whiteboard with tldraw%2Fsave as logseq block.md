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
-