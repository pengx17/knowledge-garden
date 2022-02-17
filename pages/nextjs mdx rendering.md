icon:: ▲

- There are several different approaches to [[MDX]] rendering in [[next.js]]
	- `@next/mdx` https://nextjs.org/docs/advanced-features/using-mdx
		- directly rendering `.mdx` files as pages / routes
		- pros: easy to get started
		- cons: layout is configured as default export, which is not easy to configure universal ones
	- `next-mdx-remote` https://github.com/hashicorp/next-mdx-remote
		- a MDX compiler that can be easily combined with `getStaticProps` so we can use a standalone `[slug].tsx` to load
		-
- The approach to `next-mdx-remote` and `mdx-bundler` is pretty similar. In the `[slug].tsx`, we can have the following for both libraries
	- `getStaticPaths` to get the list of files to be built
	- `getStaticProps` to get the mdx content for rendering
	- ```ts
	  export async function getStaticPaths() {
	    const items = await getSortedPostsData();
	    return {
	      paths: items.map((item) => ({
	        params: { id: item.id, original: item.fileName },
	      })),
	      fallback: false,
	    };
	  }
	  
	  export async function getStaticProps({ params }) {
	    const data = await getPostData(params.id);
	    return {
	      props: data,
	    };
	  }
	  ```
-
-