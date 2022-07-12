title:: Logseq whiteboard with tldraw/save as logseq page
icon:: 🤨

- Goal: make a whiteboard `.tldr` be represented by a Logseq page?
- Initial thoughts
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
  collapsed:: true
  :LOGBOOK:
  CLOCK: [2022-07-02 Sat 00:30:54]--[2022-07-02 Sat 18:51:13] =>  18:20:19
  :END:
	- **cases**
		- When a new page is created
			- Using `frontend.handler.page/create!` to create new pages
				- if page does not exist, compose the datoms and `transact!` into db
				- DONE when it will be written to file?
				  :LOGBOOK:
				  CLOCK: [2022-07-03 Sun 12:37:59]--[2022-07-04 Mon 10:56:10] =>  22:18:11
				  :END:
		- Read a page
		- When a block is saved
		- When a block is deleted
- Should we reuse page handlers as much as possible, or create a dedicated workflow for Whiteboard?
- ---
- By saving Logseq whiteboard as block data, we are **reusing page handlers**
	- create whiteboards under `/whiteboards`, just like `/pages` & `/journals`
	- When rendering the whiteboard page, we should also show the Whiteboard page name and allows the user to change the name.
	- whiteboard page is a **superset of a normal page**
		- **page properties** to store
			- Tldraw specific values, like bindings
		- **blocks of whiteboard page** are _shapes_ of the whiteboard
			- each block has a set of  properties for Tldraw
				- shape id, type and other metadata
				- handles etc
			- Block may not have children and **have to be at the top level**
	- Whiteboard link can be written as `[[whiteboard-link]]`
		- when visiting this link, we will need to **redirect** the route to the Whiteboard instead
		- the preview of whiteboard link may be disabled for now. We can add some custom styles to it
	- **Pros**
		- page can read whiteboard references just by their names
		- simplifies the routines of tldraw file CRUD
	- **Cons**
		- a normal page cannot be opened as a whiteboard normally. This means we may need to patch many different places when embraced whiteboard
	- Some work is being tracked here
	  id:: 62c256d4-47f7-4a11-bc05-6a25e909bf95
		- [Whiteboard Page Dev (whimsical.com)](https://whimsical.com/whiteboard-page-dev-9sdt5j7MabK6DVrxgTZw25)
	- After talked to Tienson today, we do not need to persist data into md/org. We can **store them as edn or json** instead.
-
- ---
- Using the following file for testing
	- ```edn
	  {:blocks
	   [{:block/content "edn-test2 content\ntitle:: edn-test",
	     :block/format :markdown,
	     :block/left
	     {:block/name "edn-test",
	      :block/uuid #uuid "62ca8942-a6a3-4d2c-bb5f-36998c998a94"},
	     :block/page
	     {:block/name "edn-test",
	      :block/uuid #uuid "62ca8942-a6a3-4d2c-bb5f-36998c998a94"},
	     :block/parent
	     {:block/name "edn-test",
	      :block/uuid #uuid "62ca8942-a6a3-4d2c-bb5f-36998c998a94"},
	     :block/path-refs
	     [{:block/name "edn-test",
	       :block/uuid #uuid "62ca8942-a6a3-4d2c-bb5f-36998c998a94"}],
	     :block/unordered true,
	     :block/uuid #uuid "62c9ca65-2653-4741-82e9-83ca684cadf2"}
	    {:block/content "b123",
	     :block/format :markdown,
	     :block/left
	     {:block/uuid #uuid "62c9ca65-2653-4741-82e9-83ca684cadf2"},
	     :block/page
	     {:block/name "edn-test",
	      :block/uuid #uuid "62ca8942-a6a3-4d2c-bb5f-36998c998a94"},
	     :block/parent
	     {:block/uuid #uuid "62c9ca65-2653-4741-82e9-83ca684cadf2"},
	     :block/path-refs
	     [{:block/name "edn-test",
	       :block/uuid #uuid "62ca8942-a6a3-4d2c-bb5f-36998c998a94"}],
	     :block/unordered true,
	     :block/uuid #uuid "62c9ca65-e0b4-4c23-a42f-dff988d5c48d"}
	    {:block/content "c",
	     :block/format :markdown,
	     :block/left
	     {:block/uuid #uuid "62c9ca65-e0b4-4c23-a42f-dff988d5c48d"},
	     :block/page
	     {:block/name "edn-test",
	      :block/uuid #uuid "62ca8942-a6a3-4d2c-bb5f-36998c998a94"},
	     :block/parent
	     {:block/uuid #uuid "62c9ca65-e0b4-4c23-a42f-dff988d5c48d"},
	     :block/path-refs
	     [{:block/name "edn-test",
	       :block/uuid #uuid "62ca8942-a6a3-4d2c-bb5f-36998c998a94"}],
	     :block/unordered true,
	     :block/uuid #uuid "62c9ca65-ab12-4665-87f0-cc3ffa120d3f"}
	    {:block/content "kkmmmm",
	     :block/format :markdown,
	     :block/left
	     {:block/uuid #uuid "62c9ca65-2653-4741-82e9-83ca684cadf2"},
	     :block/page
	     {:block/name "edn-test",
	      :block/uuid #uuid "62ca8942-a6a3-4d2c-bb5f-36998c998a94"},
	     :block/parent
	     {:block/name "edn-test",
	      :block/uuid #uuid "62ca8942-a6a3-4d2c-bb5f-36998c998a94"},
	     :block/path-refs
	     [{:block/name "edn-test",
	       :block/uuid #uuid "62ca8942-a6a3-4d2c-bb5f-36998c998a94"}],
	     :block/unordered true,
	     :block/uuid #uuid "62ca902f-eccf-4910-9ba2-b73cdf412dff"}],
	   :pages
	   ({:block/created-at 1657391717436,
	     :block/file
	     {:file/path
	      "/Users/pengxiao/Desktop/test-2/whiteboards/edn-test.edn"},
	     :db/id 27,
	     :block/journal? false,
	     :block/name "edn-test",
	     :block/original-name "edn-test",
	     :block/updated-at 1657442357216,
	     :block/uuid #uuid "62ca8942-a6a3-4d2c-bb5f-36998c998a94"})}
	  
	  ```
-
- ---
- [[Tue, 2022/07/12]]
	- Writing tests for `parse-file`. It seems I should not persist `:block/file` as well because it is absolute URL.
	- Also found that blocks/pages should also need further "hydration"
	- For `extract` for normal md/org pages
		- use `mldoc` to transform the text into ast
		- `extract-pages-and-blocks` to get pages and blocks
			- construct blocks and its hierarchy (parent & left)
			- pages by concating
				- construct page entity
				- all referenced pages and tags
			-
			-
		-