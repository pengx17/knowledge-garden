- `URL.createObjectURL()`
- Playground https://stackblitz.com/edit/react-ts-gjt6fb
- ```js
  const b64toBlob = (base64, type = "application/octet-stream") =>
    fetch(`data:${type};base64,${base64}`).then((res) => res.blob());
  ```
-
