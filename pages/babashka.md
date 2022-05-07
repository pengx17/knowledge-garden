- https://github.com/babashka/babashka
- Native, fast starting Clojure interpreter for **scripting**
- https://github.com/babashka/nbb for ClojureScript
  id:: 622705ee-6c66-439e-ba7b-f576aa93f45d
  - aka, `nbb`
    id:: 622acb40-e137-433a-8f75-d75089d73dfe
  - importing `default`
    id:: 6225d5f3-1a9f-4baf-abbf-f8b1ff668456
    - What does $default mean?
      The :default foo syntax is shadow-cljs only and not supported by vanilla CLJS (and nbb doesn't support it either). The $default syntax is a recent addition to CLJS and should work in shadow-cljs too: this is why nbb supports it too.
    - See here for more infor on that syntax.
    - Nbb implements :require via dynamic import (import() in JS). This is why you need to add $default to imports when you want to import the default object from a module.
- Setup
  - config with `bb.edn` (bb is short for babashka)
    - example in Logseq that is for running scripts with bb
-
- My current setup for REPL & playing around CLJS for ((622705ee-0ea3-49cd-92f9-2a5c6c28e599))
  - vscode + Calvas plugin
  - Open an empty project, create a `test.cljs` file
  - Kick off Calvas "Startup a REPL and Connect aka Jack-in"
  - Select [[nbb]] as the project type
  - Done!
