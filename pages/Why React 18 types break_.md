title:: Why React 18 types break?

- {{renderer :linkpreview,https://github.com/facebook/react/issues/24304}}
	- before
	  ```ts
	  interface FunctionComponent<P = {}> {
	        (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
	        ...
	  }
	  ```
	- after
	  ```ts
	  interface FunctionComponent<P = {}> {
	    (props: P, context?: any): ReactElement<any, any> | null;
	  }
	  ```
- There is a blog post explaining this [[React Types: Removal Of Implicit Children]]
- There is even a ==codemod to fix this==
	- https://github.com/eps1lon/types-react-codemod
	- `npx types-react-codemod preset-18 ./src`
- React 18 Types PR
	- https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210
	- https://github.com/DefinitelyTyped/DefinitelyTyped/pull/59838 add an exported map
		- this breaks `require('!raw-loader?esModule=false!@types/react/index.d.ts')`
			- use file path instead:
				- `require('!raw-loader?esModule=false!../node_modules/@types/react/index.d.ts')`
		- which causes similar issues for ((62566574-0718-4119-9df4-952a6ca9378e))
-