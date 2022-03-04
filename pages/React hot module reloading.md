- Related terms
	- [[HMR]]
- Libraries
	- React Hot Loader
	- React refresh
	  id:: 61d9a256-a15d-4c6e-ba85-e00a28d6195c
		- supported by some new webpack plugins and `@vite/plugin-react`
- Onboarding ((61d9a256-a15d-4c6e-ba85-e00a28d6195c))
	- JSX Source code requires to be transformed by react-refresh/babel
		- https://github1s.com/facebook/react/blob/HEAD/packages/react-refresh/src/ReactFreshBabelPlugin.js
	- The modern way to implement a custom HMR plugin for React
	- https://github.com/facebook/react/issues/16604#issuecomment-528663101
		- non-component exports in a module will break HMR and trigger full-reload
		- babel transform source code to
	- Turn on `__DEV__` flag
		- many react internals will check this flag
	- Is it possible to do it with React production build?
	  id:: 621c8954-5041-461b-81e5-b1789e7dad0d
	- `react-refresh/runtime`
		- `RefreshRuntime.performReactRefresh` to trigger re-render
		- `RefreshRuntime.createSignatureFunctionForTransform`
	- We may need to follow it as well for [[Code Kitchen]]
		- ((621c8954-5041-461b-81e5-b1789e7dad0d))
	- For Next.js
		- https://github1s.com/vercel/next.js/blob/HEAD/packages/react-refresh-utils/README.md
	- For Vite, `@vite/plugin-react`
		- [[MHR in Vite]]
		- JSX source code will be wrapped with the following:
			- ```jsx
			  import { createHotContext as __vite__createHotContext } from "/@vite/client";
			  import.meta.hot = __vite__createHotContext("/src/App.jsx");
			  import RefreshRuntime from "/@react-refresh";
			  let prevRefreshReg;
			  let prevRefreshSig;
			  prevRefreshReg = window.$RefreshReg$;
			  prevRefreshSig = window.$RefreshSig$;
			  window.$RefreshReg$ = (type, id) => {
			    RefreshRuntime.register(
			      type,
			      "/Users/pengxiao/Documents/GitHub/playgrounds/react-vite-test/src/App.jsx " +
			        id
			    );
			  };
			  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
			  _s = $RefreshSig$();
			  function App() {
			    _s();
			    return; // jsx;
			  }
			  _s(App, "oDgYfYHkD9Wkv4hrAPCkI/ev3YU=");
			  _c = App;
			  export default App;
			  var _c;
			  $RefreshReg$(_c, "App");
			  window.$RefreshReg$ = prevRefreshReg;
			  window.$RefreshSig$ = prevRefreshSig;
			  import.meta.hot.accept();
			  if (!window.__vite_plugin_react_timeout) {
			    window.__vite_plugin_react_timeout = setTimeout(() => {
			      window.__vite_plugin_react_timeout = 0;
			      RefreshRuntime.performReactRefresh();
			    }, 30);
			  }
			  
			  ```
		- explanation in steps (without noise)
			- create hot context and assign it to ((621f0f54-d605-4889-91bb-a644926a3d54))
			- save previous global `$RefreshReg$` and `$RefreshSig$`
			- assign `$RefreshReg$` to register current component implementation
			- call `$RefreshSig$` in component render
			- register `$RefreshSig$` with a stable ID
			- restore previous  `$RefreshReg$` and `$RefreshSig$`
			- queue update with `RefreshRuntime.performReactRefresh()`
	- For [[Code Kitchen]], we may still need to use `babel/react` to
		- transform component files
		- inject `$RefreshReg$` and `$RefreshSig$` calls for EACH component
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-