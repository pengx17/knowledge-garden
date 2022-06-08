icon:: 🧑‍🎓
progress:: {{renderer :todomaster}}
alias:: Learning CLJ

- DONE learn a lot from the comments from: [What do beginners struggle with?](https://clojureverse.org/t/what-do-beginners-struggle-with/5383)
  :LOGBOOK:
  CLOCK: [2022-03-04 Fri 10:44:23]--[2022-03-05 Sat 15:12:40] => 28:28:17
  CLOCK: [2022-03-05 Sat 15:12:41]--[2022-06-08 Wed 14:28:48] =>  2279:16:07
  :END:
	- require / ns syntax
		- `(require ..)` vs `(ns .. (:require ..))`
		- [Clojure ns syntax cheat-sheet](https://gist.github.com/ghoseb/287710/) ⭐
		- ((6225d5f3-1a9f-4baf-abbf-f8b1ff668456))
		- ((622f3e19-89b1-46da-a277-9b3c587facc2))
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
	- ClojureScript eco is a bit fragmented with all kinds of tools and have no idea where to start
	- Reader
	- Macros
- Learning materials online
  id:: 626bf4a6-d48a-4fcb-9aa9-24ca992cf983
	- NOW https://exercism.org/tracks/clojure ⭐
	  :LOGBOOK:
	  CLOCK: [2022-03-10 Thu 16:23:38]
	  :END:
		- being recommended for several times
	- NOW [[https://4clojure.oxal.org]] ((62315623-a335-4f46-987a-c89a9cb243a2))
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
	- **destructuring** https://clojure.org/guides/destructuring
	- [CLJS interop with JS](https://lwhorton.github.io/2018/10/20/clojurescript-interop-with-javascript.html)
		- ```clojure
		  ((. js/document -getElementsByTagName) "html")
		  (js-invoke js/LSPluginCore "reload" id)
		  ```
- [Clojure Style Guide](https://guide.clojure.style/)
  id:: 626ccf5a-8fa1-413b-bbaf-583728beb2d8
-
- Books
	- [[Clojure for the Brave and True]]
	- [[How to Design Programs, Second Edition]]
- ## {{embed [[Clojure Gotchas]]}}
  
  ---
- Thoughts: Clojure’s stability can improve your lifestyle, [ref](https://github.com/braveclojure/bcjobs-blog/blob/master/source/2022-02-11-long-term-clojure-benefits.html.md)
	- For JS, we have many kinds of tools to upgrade library version in CI (Renovate, dependbot, etc), but for Clojure, the API could stay for several years because of the simplicity of language.
-