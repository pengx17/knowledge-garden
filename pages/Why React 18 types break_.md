title:: Why React 18 types break?

- {{renderer :linkpreview,https://github.com/facebook/react/issues/24304#issuecomment-1094565891}}
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
- There is even a codemod to fix this
	- https://github.com/eps1lon/types-react-codemod
	- `npx types-react-codemod preset-18 ./src`