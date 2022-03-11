icon:: 🧑‍🎓

- NOW learn a lot from the comments from:  [What do beginners struggle with?]( https://clojureverse.org/t/what-do-beginners-struggle-with/5383)
  :LOGBOOK:
  CLOCK: [2022-03-04 Fri 10:44:23]--[2022-03-05 Sat 15:12:40] =>  28:28:17
  CLOCK: [2022-03-05 Sat 15:12:41]
  :END:
	- require / ns syntax
		- `(require ..)` vs `(ns .. (:require ..))`
		- [Clojure ns syntax cheat-sheet](https://gist.github.com/ghoseb/287710/) ⭐
		- ((6225d5f3-1a9f-4baf-abbf-f8b1ff668456))
	- Knowledge of the core library
		- Find out the most suitable functions is hard
		- Since Clojure is a [[hosted language]], it is possible to use Java or JavaScript libraries, which makes interpolation harder
			- That is why the core library provides library like `clojure.string`
		- Math special namespace for [[ClojureScript]] https://cljs.github.io/api/syntax/Math-namespace
		- ((622af365-535c-4bdc-af35-e0f5e9276120))
	- Lack of static typing system and Nullability checks
	- REPL driven development
		- some videos in practice?
			- https://www.youtube.com/channel/UC8GD-smsEvNyRd3EZ8oeSrA
	- Debugging
		- How to properly start up a [[calva]] project?
	- Global setup
		- the official CLI tools are more favourable than [[Leiningen]]
		- [[babashka]]
	- ClojureScript  eco is a bit fragmented with all kinds of tools and have no idea where to start
	- Reader
	- Macros
- Learning materials online
	- NOW https://exercism.org/tracks/clojure ⭐
	  :LOGBOOK:
	  CLOCK: [2022-03-10 Thu 16:23:38]
	  :END:
		- recommended several times
	- NOW https://4clojure.oxal.org Progress [:progress {:value 46 :max 195}]
	  collapsed:: true
	  id:: 622705ee-0ea3-49cd-92f9-2a5c6c28e599
	  :LOGBOOK:
	  CLOCK: [2022-03-04 Fri 10:44:27]
	  :END:
		- a list of one-liner quizzes from entry level to hard
		-
- Starter repos
	- https://github.com/seancorfield/usermanager-example
	- Recommended here https://clojureverse.org/t/what-do-beginners-struggle-with/5383/24
- Eco-system
	- https://tryclojure.org/
		- A step-by-step REPL tutorial
	- https://nextjournal.github.io/clojure-mode/#use-it
		- A notebook (like observable.com) but with more language supports
- Dev tools
	- [[Dirac]]
		- There are some very interesting ASCII diagrams
- Cheatsheets
  id:: 622af365-535c-4bdc-af35-e0f5e9276120
	- https://cljs.info/cheatsheet/
- Style Guide
	- https://guide.clojure.style/
- Books
	- [[Clojure for the Brave and True]]
	- [[How to Design Programs, Second Edition]]
- ---
- Thoughts: Clojure’s stability can improve your lifestyle, [ref](https://github.com/braveclojure/bcjobs-blog/blob/master/source/2022-02-11-long-term-clojure-benefits.html.md)
	- For JS, we have many kinds of tools to upgrade library version in CI (Renovate, dependbot, etc), but for Clojure, the API could stay for several years because of the simplicity of language.
	-