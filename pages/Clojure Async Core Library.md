- [Mastering Concurrent Processes with core.async | Clojure for the Brave and True (braveclojure.com)](https://www.braveclojure.com/core-async/) #[[Clojure for the brave and true]]
- [clojure.core.async namespace | ClojureDocs - Community-Powered Clojure Documentation and Examples](https://clojuredocs.org/clojure.core.async)
- Seems that: since ClojureScript does not provide blocking on async, there is API for  `>!`  and  `<!` , but not  `<!!`  and  `>!!`
	- `>!`  and  `<!`  works in  `go`  blocks, but  `<!!`  will also work outside of go block
- the difference between  `go`  and  `thread` ?
	- `go`  uses a thread from the **thread pool** to do the work
	- `thread`  creates a new thread and returns a  `chan`
- buffered channel
	- put message into a full chan will block until another process takes out value from this chan
- Clojure’s core.async library was largely inspired by Go’s concurrency model, which is based on the work by Tony Hoare in Communicating Sequential Processes and is available at [http://www.usingcsp.com/](http://www.usingcsp.com/).
	-
- [Intro to Core Async | Lesson 25 | Learn ClojureScript (learn-clojurescript.com)](https://www.learn-clojurescript.com/section-4/lesson-25-intro-to-core-async/)
	- There are some nice looks diagrams
- We also have  `put!`  to put values into  `chan`  outside of go block
	- `put!`  does not park the process
	- we can use it in a event handler callback
	- the counterpart is  `take!`
- It looks to me that in order to achieve something like  `Promise.all` , we need to
- go-loop, mix and merge
	- [Combining & Controlling Channels with core.async's merge and mix (yobriefca.se)](https://yobriefca.se/blog/2014/06/01/combining-and-controlling-channels-with-core-dot-asyncs-merge-and-mix/)
- Example of `Promise.all` in Async Core:
	- ```clojure
	  (defn async-map
	    [f ch]
	    (let [res-ch (async/chan)]
	      (async/go
	        (async/>! res-ch (f (async/<! ch))))
	      res-ch))
	  
	  (defn wait-all
	    [chs]
	    (let [indexed-chs (map-indexed (fn [idx ch] (async-map (fn [v] [idx v]) ch)) chs)
	          indexed-ch (async/merge indexed-chs)
	          res-ch (async/chan)]
	      (async/go-loop [n (count chs)
	                      res []]
	        (if (zero? n)
	          (async/>! res-ch res)
	          (let [[idx v] (async/<! indexed-ch)]
	            (recur (dec n) (assoc res idx v)))))
	      res-ch))
	  
	  (async/go
	    (let [a (async/chan)
	          b (async/chan)
	          c (async/chan)]
	      (async/go (println (async/<! (wait-all [a b c]))))
	      (async/>! a "a")
	      (async/>! b "b")
	      (async/>! c "c")))
	  
	  ```