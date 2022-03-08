- https://github.com/babashka/babashka
- Native, fast starting Clojure interpreter for **scripting**
- https://github.com/babashka/nbb for ClojureScript
	- importing `default`
	  id:: 6225d5f3-1a9f-4baf-abbf-f8b1ff668456
		- What does $default mean?
		  The :default foo syntax is shadow-cljs only and not supported by vanilla CLJS (and nbb doesn't support it either). The $default syntax is a recent addition to CLJS and should work in shadow-cljs too: this is why nbb supports it too.
		- See here for more infor on that syntax.
		- Nbb implements :require via dynamic import (import() in JS). This is why you need to add $default to imports when you want to import the default object from a module.
- Setup
	- config with `bb.edn` (bb is short for babashka)
		- example in Logseq that is for running scripts with bb
	-