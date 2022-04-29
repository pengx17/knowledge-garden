- NOW sadf [[重点]]
  :LOGBOOK:
  CLOCK: [2022-04-28 Thu 16:13:12]--[2022-04-28 Thu 16:13:13] =>  00:00:01
  CLOCK: [2022-04-28 Thu 16:14:04]
  :END:
- LATER asd
-
- #+BEGIN_QUERY
  {:title "All 重点 in the current page"
   :query [:find (pull ?b [*])
         :in $ ?current-page
         :where
         [?p :block/name ?current-page]
         [?imp :block/name "重点"]
         [?b :block/refs ?imp]
         [?b :block/parent ?p]]
   :inputs [:current-page]}
  #+END_QUERY
-
-
-