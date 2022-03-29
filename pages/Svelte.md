- Rendering in Svelte (like `ReactDOM.render`)
  id:: 04dfc0c4-1f89-4b9c-add8-6b82685bb795
	- ```js
	  import App from './App.svelte';
	  
	  const app = new App({
	  	target: document.body,
	  	props: {
	  		// we'll learn about props later
	  		answer: 42
	  	}
	  });
	  ```
- The compiler under the hood
	- https://dev.to/joshnuss/svelte-compiler-under-the-hood-4j20