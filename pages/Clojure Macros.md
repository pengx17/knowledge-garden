- https://www.braveclojure.com/read-and-eval/
- [Writing Macros | Clojure for the Brave and True (braveclojure.com)](https://www.braveclojure.com/writing-macros/)
- See some weird codes here ...
	- ```clojure
	  (defmacro combine-result [pass & xforms]
	    (concat '(do)
	      (for [x xforms]
	        `(let [result# ~x]
	           (if (not result#) (swap! ~pass (constantly false)))
	           (check result# '~x)))))
	  
	  (defmacro deftest [name & body]
	    `(let [f# (fn []
	                (let [pass# (atom true)]
	                  (combine-result pass# ~@body)
	                  @pass#))]
	       (swap! *all-test* assoc '~name f#)
	       (def ~name f#)))
	  ```
	- What is the <code>`</code>, <code>'</code> and <code>~</code>
-