- Related terms
	- [[HMR]]
- Libraries
	- React Hot Loader
	- React refresh
	  id:: 61d9a256-a15d-4c6e-ba85-e00a28d6195c
		- supported by some new webpack plugins and `@vite/plugin-react`
- Onboarding ((61d9a256-a15d-4c6e-ba85-e00a28d6195c))
	- The modern way to implement a custom HMR plugin for React
	- https://github.com/facebook/react/issues/16604#issuecomment-528663101
		- note that non-component export in a module will break HMR and trigger full reload
	- Is it possible to do it with React production build?
	  id:: 621c8954-5041-461b-81e5-b1789e7dad0d
	- We may need to follow it as well for [[Code Kitchen]]
		- ((621c8954-5041-461b-81e5-b1789e7dad0d))
	- For Next.js
		- https://github1s.com/vercel/next.js/blob/HEAD/packages/react-refresh-utils/README.md