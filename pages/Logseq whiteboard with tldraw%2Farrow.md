title:: Logseq whiteboard with tldraw/arrow

- {{renderer :todomaster}}
- NOW understand how arrow + sticky works in version 1.0
  :LOGBOOK:
  CLOCK: [2022-05-20 Fri 20:40:45]
  :END:
	- the `core-example-advanced` provides some clues on arrow
	- `tldraw/tldraw.ArrowUtil` shows a full example
		- also uses class extends syntax
		- `getShape`: seems to be `defaultProps` in 2.0
		- `component` -> `ReactComponent`
		- what is `Indicator`?
			- it is the overlay that when the shape is being selected
	- `ArrowSession`
		- what is a Session?
			- seems like an update "transaction" for a shape?
				- when there is some events fired, the embedded shapes will get notified on every frame
		- See https://github.com/tldraw/tldraw/blob/main/packages/tldraw/src/state/sessions/about-sessions.md
			- In next version, it is now replaced by an array of  states
- LATER automatic arrow rendering for shapes in the whiteboard
  :LOGBOOK:
  CLOCK: [2022-05-20 Fri 20:41:19]--[2022-05-20 Fri 20:41:20] =>  00:00:01
  CLOCK: [2022-05-21 Sat 16:21:25]--[2022-05-21 Sat 16:21:26] =>  00:00:01
  CLOCK: [2022-05-21 Sat 16:21:26]--[2022-05-21 Sat 16:21:27] =>  00:00:01
  :END:
- DONE Very interesting to read https://www.steveruiz.me/posts/zoom-ui, which explains how to make an infinite canvas, camera etc
- DONE https://www.steveruiz.me/posts/perfect-dragging explains dragging
  collapsed:: true
  :LOGBOOK:
  CLOCK: [2022-05-21 Sat 10:35:59]--[2022-05-21 Sat 14:25:17] =>  03:49:18
  :END:
	- using movement delta from dragging start to dragging current position, instead of the delta between last two pointer positions
		- ![image.png](../assets/image_1653101221064_0.png)
	- By remember the start position, we could do some features more robustly
		- You can implement a "dead zone" to prevent accidental drags.
		  You can update the position while scrolling during the drag.
		  You can restore a shape's position if the user cancels the drag.
		  You can freely adjust the delta with features like snapping, precision mode, or elastic bounds.
	-
- Using `perfect-freehand` to draw arrows instead of `perfect-arrow`
- The text shape has a `getAutoSizedBoundingBox`
- In version 2, actions are modeled into state machines. e.g., `ResizingState`
- Hit tests
	- `hitTestBounds` for selection shapes
	- `hitTestPoint` and `hitTestLineSegment` for erasing
- Arrow/Line ==binding==
	- Line shape is just a special arrow without heads
	- Binding is an object with `id`, `fromId` and `toId`
	- v1: `canBind` property in shape
		- my initial thoughts:
			- an arrow can bind to zero-to-two bindable shapes
			- binding indicator
	- next: seems not yet implemented
		- enhance `TranslatingHandleState`
		- Creating & Translating is two different states in next
		- How does 1.0 handles arrow handle points snapping?
			- **at the end of every update cycle, it will call `cleanup` in `TldrawApp`**, which calls `updateArrowBindings`  ⭐️
			- which will then call `TLDR#updateArrowBindings`
- DONE Change from arrays to maps
  :LOGBOOK:
  CLOCK: [2022-05-24 Tue 21:52:20]--[2022-05-27 Fri 22:19:02] =>  72:26:42
  :END:
	- It is easier for merging states etc
	-
-