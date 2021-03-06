- https://github.com/rollup/plugins/issues/481
- How it works?
  - rollup will transform each files first, then do bundling
    - in the bundling output, you may see some codes are removed
  - basic idea is to read each file and try to convert cjs to esm syntax.
  - there are many cases that will be transformed by this plugin
    - Importing CJS from CJS
      - Assignment to module.exports
      - when necessary, wrappers (`createCommonjsModule `) will be used. This is a **deoptimization**.
        - Eg., when the CJS code cannot be statically transformed
        - Lodash export not defined issue
          - this might be caused by importing `lodash` from a CJS dependency? Not sure why this plugin does not consider it as a CJS
          - or caused by [[esm/dynamic load]]?
    - Importing CJS from ESM
      - [[@rollup/plugin-node-resolve]]
    - ESM that was transpiled to CJS
      - This is the tricky one. The problem here is to maintain isomorphic behaviour between the original ES module and the CJS module.
      - however the default export should not be module.exports but module.exports.default. This is incompatible with the previously listed interop patterns.
      - At the moment most tools implement a runtime detection pattern for this by adding an [[__esModule]] property to module.exports to signify this is a transpiled ES module. Then the algorithm when getting the default import is
        - If this property is present, use module.exports.default as the default export
        - Otherwise use module.exports
      - 📈 Improvement 2: If we come across the Object.defineProperty(exports, "\_\_esModule", { value: true }) line (or !0 instead of true for the minified case) on the top level of a module, then we can just mark this module as being transpiled and can even get rid of this line in the transformer, making the code more efficient and removing the need for any interop, i.e. above we do not add the export default at all in that case. **There is also no longer a need to wrap the code in createCommonjsModule if this property definition is ignored.**
    - Importing ESM from CJS
      - no engine that supports this at the moment
      -
