title:: Web API: Clipboard

- [Cut, Copy and Paste in JavaScript with the Clipboard API - SitePoint](https://www.sitepoint.com/clipboard-api/)
	- Pasting is more complex because multiple `ClipboardItem` objects can be returned with differing content types. It’s therefore necessary to iterate through each type until a useful format is found. For example:
	- ```js
	  const clipboardItems = await navigator.clipboard.read();
	  for (const clipboardItem of clipboardItems) {
	    for (const type of clipboardItem.types) {
	  	if (type === 'image/png') {
	      // return PNG blob
	      return await clipboardItem.getType(type);
	      }
	    }
	  }
	  ```