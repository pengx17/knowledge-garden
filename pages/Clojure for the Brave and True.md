- DONE Chapter 4: Core functions in depth
  collapsed:: true
  - Clojure is like JS's "duck typing"
  - `seq` related function
    - `map` #[[Clojure Gotchas]]
      - can take multiple collections
      - can take a collection of functions
      - the result will be called with `list`
    - `reduce`, `take`, `drop` etc - can directly work on maps since **map in Clojure is also a Sequence**
      - Q: When use `(take 3 {:a 1 :b 2 :c 3 :d 4})` we got a list of pairs. Is there a `Object.fromEntries` version in Clojure?
      - Y: use `into`: `(into {} (take 3 {:a 1 :b 2 :c 3 :d 4}))`
    - `sort-by`
      - `(sort-by keyfn coll)` `(sort-by keyfn comp coll)`
      - sorted in asc order (if no `comp` provided)
    - **Lazy Seqs**
      - can be infinite
        - `(repeat "na")`
        - `repeatedly` - takes a function
      - `map` `filter` etc are lazy
      - compute a lazy seq is called **realize**
        - `realized?` to check if a lazy seq is realized
      - use `time` to print the elapsed time
      - Clojure will **realize 32 elements at once preemptively for lazy seq** for performance concern #[[Clojure Gotchas]]
        - this will only happen ONCE!
      - use `lazy-seq` to directly construct one
    - IO functions
      - `slurp` to read files, http
      - `spit`
- Chapter 5, functional programming
  collapsed:: true
  - "Referentially Transparent"
  - can use `memoize` for pure functions to memorize results! ⭐ ❗
- DONE [Chapter 6, Organizing Your Project: A Librarian’s Tale](https://www.braveclojure.com/organization/)
  id:: 622f3e19-89b1-46da-a277-9b3c587facc2
  collapsed:: true
  :LOGBOOK:
  CLOCK: [2022-03-16 Wed 09:47:35]--[2022-03-16 Wed 09:47:35] => 00:00:00
  :END:
  - questions before reading
    - How to
      - resolve an external dependency
      - export current lib
      - Package management in Clojure like npmjs org
  - Notes:
    - `(ns-name *ns*)` to get current namespace's name. `*ns*` is the current namespace
      - a namespace is a map from symbol to data - "interned"
        - `(ns-interns *ns*)` to show all the vars interned in the current ns
        - `ns-map` gives **all the vars** that is available to the given ns
        - `#'user/great-books` is the reader form of a var
          - `(deref #'user/great-books)` === `great-books`
      - Var bound to the current namespace. Only used for bootstrapping.
    - Quoting any Clojure form tells Clojure not to evaluate it but to treat it as data
    - ⭐ **Creating and switching namespaces:** core functions `create-ns`, `in-ns` and `ns` macro
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
        - `(use 'clojure.core)` to refer core library
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
- [Chapter 7, Clojure Alchemy: Reading, Evaluation, and Macros](https://www.braveclojure.com/read-and-eval/) and chapter 8
  - Learnt basics of Macro syntax. \`, \~@ etc
- Chapter 9, concurrency
  - use `@` to get the value of a future. It also blocks.
    - can use `deref` to give timeout/default value
    - use `realized?` to check if it is ready
  - what's the differences between `future`, `delay` and `promise`?
    - `delay` won't do anything until being deref
      - use `force` to trigger it
      - should be the same with `deref`?
    - `promise` is a function which returns a promise instance that can be "resolved" by `deliver`
    -
-
