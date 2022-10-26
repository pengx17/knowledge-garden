title:: Logseq whiteboard with tldraw/performance issue

- DONE `getTextLabelSize` memorize
  :LOGBOOK:
  CLOCK: [2022-07-26 Tue 09:31:32]--[2022-07-26 Tue 09:31:32] =>  00:00:00
  :END:
- Whenever shape is updated through updated call, a Mobx `reaction` in `TLPage` will be called
	- it **clones ALL shape props recursively** and **deep copy the current page model**
	- This is OK when the number of shapes are small, but is super slow when there are lots of shapes
- Try use some proxy base approach?
	- https://github.com/dai-shi/proxy-compare
	- [proxyequal](https://www.npmjs.com/package/proxyequal)
	- [proxy-state-tree](https://www.npmjs.com/package/proxy-state-tree)
	- [proxy-watcher](https://www.npmjs.com/package/proxy-watcher)
		- I think this one is close to what I want?
- How about - add a subscriber to every shape and the `TLPage` class. When any related shape changes, push the changed ID to the list
	- like this one? in https://github.com/mobxjs/mobx-utils#queueprocessor
	  ```js
	  const pendingNotifications = observable([])
	  const stop = queueProcessor(pendingNotifications, msg => {
	    // show Desktop notification
	    new Notification(msg);
	  })
	  
	  // usage:
	  pendingNotifications.push("test!")
	  ```
	-