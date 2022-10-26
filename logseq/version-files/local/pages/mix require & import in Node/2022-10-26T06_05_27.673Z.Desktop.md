- https://www.kindacode.com/article/node-js-how-to-use-import-and-require-in-the-same-file/
- ```js
  // These lines make "require" available
  import { createRequire } from "module";
  const require = createRequire(import.meta.url);
  ```
