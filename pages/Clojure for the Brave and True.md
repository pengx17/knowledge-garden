- [Chapter 6, Organizing Your Project: A Librarian’s Tale](https://www.braveclojure.com/organization/)
  id:: 622f3e19-89b1-46da-a277-9b3c587facc2
	- questions before reading
		- How to
			- resolve an external dependency
			- export current lib
			- Package management in Clojure like npmjs org
	- Notes:
		- `(ns-name *ns*)` to get current namespace's name. `*ns*` is the current namespace
			- a namespace is a map from symbol to data - "interned"
				- `(ns-interns *ns*)` to show all the vars interned in the current ns
				- `ns-map` gives **all the vars**  that is available to the given ns
				- `#'user/great-books` is the reader form of a var
					- `(deref #'user/great-books)` === `great-books`
			- Var bound to the current namespace. Only used for bootstrapping.
		- Quoting any Clojure form tells Clojure not to evaluate it but to treat it as data
		- Creating namespaces: core functions `create-ns`, `in-ns` and `ns` macro
			- `create-ns`: simply create a ns
			- `in-ns`: create and switch into it
		- Accessing other namespace
			- direct `namespace/varname`
			- `refer`: updating current ns's var map to use the referred ns
				- `(clojure.core/refer 'cheese.taxonomy :only ['bries])`
				- `(clojure.core/refer 'cheese.taxonomy :rename {'bries 'yummy-bries})`
				- can have filters: `:only`, `:exclude`, `:rename`
				  id:: 622f569a-4dad-4e4e-93b4-b173e8b4012b
				- `clojure.core` namespace is automatically referred by REPL in `user` namespace
					- Can by simplified using `(clojure.core/refer-clojure)`
			- `alias`: a shortcut to the full-qualified symbols
				- `(clojure.core/alias 'taxonomy 'cheese.taxonomy)`
		- File name and namespace name
			- https://www.braveclojure.com/organization/#:~:text=up%20a%20namespace.-,The%20Relationship%20Between%20File%20Paths%20and%20Namespace%20Names,-To%20kill%20two
		- `require`: load and evaluate (ensure) a file in the project. also create a namespace that is available to `refer`. Similar to `require` in JS
			- `(require '[the-divine-cheese-code.visualization.svg :as svg])` combine with `alias`
			- `use`: combine `require` and `refer`
				- `(use '[the-divine-cheese-code.visualization.svg :as svg])`
				- take the same in ((622f569a-4dad-4e4e-93b4-b173e8b4012b))
				- `(use '[the-divine-cheese-code.visualization.svg :as svg :only [points]])`
		- `ns` macro
			- refers to `clojure.core` by default
			- never have to quote symbols within ns
			- 6 kinds of references in `ns`
				- `(:refer-clojure)`
					- control `clojure.core` refer
				- `(:require)`
					- `(:require the-divine-cheese-code.visualization.svg)`
					- <pre>(ns the-divine-cheese-code.core
					    (:require [the-divine-cheese-code.visualization.svg :as svg]
					              [clojure.java.browse :as browse]))</pre>
					- <pre>(ns the-divine-cheese-code.core
					    (:require [the-divine-cheese-code.visualization.svg :refer [points]]))
					  </pre>
				- `(:use)`
				- `(:import)`
				- `(:gen-class)`
				- `(:load)`: rarely used
- [Chapter 7, Clojure Alchemy: Reading, Evaluation, and Macros](https://www.braveclojure.com/read-and-eval/)
-
	-
-