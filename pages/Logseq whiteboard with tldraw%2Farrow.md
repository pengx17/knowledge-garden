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
			-
		-
- LATER automatic arrow rendering for shapes in the whiteboard
  :LOGBOOK:
  CLOCK: [2022-05-20 Fri 20:41:19]--[2022-05-20 Fri 20:41:20] =>  00:00:01
  :END:
- Seems very interesting to read https://www.steveruiz.me/posts/zoom-ui, which explains how to make an infinite canvas
- Using `perfect-freehand` to draw arrows instead of `perfect-arrow`