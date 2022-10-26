- ## dev issues
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
- {{renderer :todomaster}}
	- DONE 调整创建 Logseq shape 的逻辑，目前创建一个空卡片的行为有点奇怪。比如，点击 Logseq shape tool 的时候自动触发搜索功能 (cmd+k)，选完后创建shape在鼠标当前位置创建卡片，并已经是选中状态，允许用户移动卡片位置。
		- 可以参考 https://dragonman225.js.org/p/jade/index.html
		- CANCELED 参考 heptabase 用 wheel 事件结束来标记滚动结束?
	- LATER 可以折叠 shape，只显示 title header，
	- DONE 单击 shape 选中 shape （可以变化形状等）, 双击 shape 进入 logseq 编辑状态，自动将第一个 block 变成编辑状态。
	- DONE logseq shape 阻止 pan 的问题：记录当前canvas移动速度，如果速度大于零就继续pan，不然就让 logseq shape 拦截 wheel 事件
	  :LOGBOOK:
	  CLOCK: [2022-05-17 Tue 22:36:40]--[2022-05-18 Wed 22:25:58] =>  23:49:18
	  :END:
	- LATER Dark mode
	- ~~Hold shift to enable scrolling?~~
	- DONE Find out why shortcuts not working?
	  :LOGBOOK:
	  CLOCK: [2022-05-21 Sat 18:28:36]--[2022-05-21 Sat 18:47:35] =>  00:18:59
	  :END:
		- registered using https://github.com/ccampbell/mousetrap - https://craig.is/killing/mice
		- 1.0 is using https://github.com/JohannesKlauss/react-hotkeys-hook
		- Caused by React strict mode https://twitter.com/schickling/status/1523378971458498560
	-
- Meeting notes today: [Whiteboard Sync - Otter.ai](https://otter.ai/u/cfuRlqSFYSGDJF6hb2yQKLpoLNk?f=home)
	-