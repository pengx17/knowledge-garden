title:: Logseq whiteboard with tldraw/single block model portal

- `block-content-or-editor`
	- ```
	                hiccup-config (merge
	                               {:id (if block? (str block-id) page-name)
	                                :db/id (:db/id block-entity)
	                                :block? block?
	                                :editor-box editor/box
	                                :document/mode? document-mode?}
	                               config)
	  ```
	-