- https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem
- This web API requires the user to manually grant `clipboard-write` and `clipboard-read` permissions
- ```js
  await navigator.permissions.query({name: 'clipboard-write'})
  ```
-