tags:: remix, frontend

- https://remix.run/blog/remixing-react-router
- TL;DR
  - RR will use [[Render As You Fetch]] pattern
    - The core APIs, `<Routes />`, `<Route />` will have `loader` etc related data fetching props
      - Define a route like this
        - ```jsx
          <Route
            path=":projectId"
            element={<Projects />}
            // a lot of your loading is gonna be this simple, React
            // Router will handle all the pending states and expose it
            // to you so you can build pending/optimistic UI
            loader={async ({ signal, params }) =>
              fetch(`/api/projects/${params.projectId}`, { signal })
            }
          />
          ```
      - access the data in `Projects` component with `useLoaderData`
      - access loading state with `useTransition`
    - The Routes will be able to load data in parallel with this pattern
  - Core apis also provide a `action` handler for handling `form` actions, thus support mutations
    - LATER may refer to [[remix]] on this?
  - Putting a lot of configs for route/routes may be too heavy. It is also possible to define **route modules**
    - ```tsx
      export async function loader(args) {
        let actualLoader = await import("./actualModule").loader;
        return actualLoader(args);
      }

      export async function action(args) {
        let actualAction = await import("./actualModule").action;
        return actualAction(args);
      }

      export const Component = React.lazy(
        () => import("./actualModule").default
      );
      ```
- Repository Merge
  - history, react router, remix repos will be merged into one monorepo
- Remix is "just a compiler and server for React Router".
-
