- Steps
  1. in `resources/forge.config.js`, comment out osxSign and osxNotarize
  2. change `resources/package.json`name to `logseq-xxx`
  3. run `yarn` in root and `static`
  4. run `yarn release-electron`
  5. when finished, the Electron app should have been build in `static/out`
- 🎉