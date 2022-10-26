title:: Web API: Clipboard

- [Cut, Copy and Paste in JavaScript with the Clipboard API - SitePoint](https://www.sitepoint.com/clipboard-api/)
- [Unblocking clipboard access (web.dev)](https://web.dev/async-clipboard/)
	- Pasting is more complex because multiple `ClipboardItem` objects can be returned with differing content types. It’s therefore necessary to iterate through each type until a useful format is found. For example:
	  id:: 62af02d0-0443-42e8-a284-946c162b0f89