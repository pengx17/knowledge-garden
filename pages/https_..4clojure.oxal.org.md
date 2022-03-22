title:: https://4clojure.oxal.org

- {{progress 55, 195}}
- Core libraries
	- `contain?` checks the KEY. Which means `(contains? [1 1 1] 2)` returns `true`!
	- `some` returns the first truthy element
		- but the returned value might not be logically true. Use `nil?` check instead.
	- `juxt` learnt a new word !
		- https://clojuredocs.org/clojure.core/juxt
-
-