- ## dev issues
  id:: 62793896-81b7-4a97-a5db-7ac22841fef8
	- tldraw uses class syntax for defining shapes and it makes defining shapes in Logseq code base not possible
	- current build process on a change
		- build `@tldraw/react` with `yarn` (build in postinstall script)
		- build `tldraw-logseq` (`yarn build` or `yarn dev`)
		- testing `tldraw-logseq` is a pain
			- started a pure js (vite) environment as a compliment to the cljs demo
		- once `tldraw-logseq` is ready, move the built assets to Logseq
		- LATER watching mode for Logseq takes a looong time! Stuck in waiting for `remote-relay` socket connection :(
	- DONE block editing shortcuts not working at all
	  id:: 62818abc-bcd0-4a86-91c9-0f1c93495d2f
	  :LOGBOOK:
	  CLOCK: [2022-05-15 Sun 16:24:40]
	  CLOCK: [2022-05-16 Mon 07:21:34]--[2022-05-16 Mon 20:30:38] =>  13:09:04
	  :END:
		- Tldraw captured (stop propagation) for many different events?
		- `(shortcut/mixin :shortcut.handler/block-editing-only)` should be manually invoked ?
	-