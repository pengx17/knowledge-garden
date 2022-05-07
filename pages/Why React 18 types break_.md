title:: Why React 18 types break?

- <a style="width:720px;height:140px" class="link_preview__root"><div class="link_preview__card-container"><div class="link_preview__text-container"><div class="link_preview__text-container-title">Bug: React 18 types broken since the type release a view hours ago · Issue #24304 · facebook/react</div><div class="link_preview__text-container-description">Edit: If you have issues but you did NOT upgrade to 18, or if you upgraded but get confusing errors from dependencies, the problem is likely that some library (incorrectly) specifies @types/react as a dependency with version _ rather tha...</div><div class="link_preview__text-container-url-container"><img src="https://github.githubassets.com/favicons/favicon.svg" width="16" height="16"/><span class="link_preview__text-container-url">https://github.com/facebook/react/issues/24304</span></div></div><div class="link_preview__cover-container"><img class="link_preview__cover-image" src="https://opengraph.githubassets.com/56ab84a7f7e5834ccf8d24926312f73357d561f3945a7794d60e0fd35e9789d4/facebook/react/issues/24304" alt="cover"/></div></div></a><style>.link_preview**root{border:1px solid var(--ls-border-color);border-radius:6px;cursor:pointer;display:block;overflow:hidden;text-decoration:none;user-select:none}@media (max-width:1200px){.lsp-hook-ui-slot .link_preview**root{max-width:640px}}@media (max-width:760px){.lsp-hook-ui-slot .link_preview**root{max-width:480px}}.link_preview**root,.link_preview\_\_root _{box-sizing:border-box}.link_preview**root:hover{border:1px solid rgba(97,106,229,.5)}.link_preview**card-container{align-items:stretch;background-color:var(--ls-secondary-background-color);display:flex;height:100%;justify-content:space-between;width:100%}.link_preview**text-container{display:flex;flex:2;flex-flow:column;overflow:hidden;padding:12px 16px}.link_preview**cover-container{flex:1}.link_preview**text-container-title{color:var(--ls-primary-text-color);flex-shrink:0;font-size:16px;font-weight:500;line-height:26px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.link_preview**text-container-description{color:var(--ls-secondary-text-color);display:flex;flex-grow:1;font-size:12px;font-weight:400;line-height:20px;margin-top:6px;overflow:auto}.link_preview**text-container-description&gt;\*{align-self:center;flex:1}.link_preview**text-container-url-container{align-items:center;color:var(--ls-primary-text-color);display:flex;flex-direction:row;flex-wrap:nowrap;font-size:12px;height:17px;line-height:17px;margin-top:6px;min-width:0}.link_preview**text-container-url-container&gt;img{margin-right:8px}.link_preview**text-container-url{flex-grow:0;flex-shrink:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.link_preview**cover-image{float:right;height:100%;min-width:150px;object-fit:cover;overflow:hidden}.link_preview**root img{box-shadow:unset;margin-left:unset}</style>
  - before
    ```ts
    interface FunctionComponent<P = {}> {
          (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
          ...
    }
    ```
  - after
    ```ts
    interface FunctionComponent<P = {}> {
      (props: P, context?: any): ReactElement<any, any> | null;
    }
    ```
- There is a blog post explaining this [[React Types: Removal Of Implicit Children]]
- There is even a ==codemod to fix this==
  - https://github.com/eps1lon/types-react-codemod
  - `npx types-react-codemod preset-18 ./src`
- React 18 Types PR
  - https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210
  - https://github.com/DefinitelyTyped/DefinitelyTyped/pull/59838 add an exported map
    - this breaks `require('!raw-loader?esModule=false!@types/react/index.d.ts')`
      - use file path instead:
        - `require('!raw-loader?esModule=false!../node_modules/@types/react/index.d.ts')`
    - which causes similar issues for ((62566574-0718-4119-9df4-952a6ca9378e))
-
