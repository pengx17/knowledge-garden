- Task, [Support for queries](https://github.com/pengx17/logseq-plugin-todo-master/issues/19)
  - #+BEGIN_QUERY
    {:title "{{renderer :todomaster}}"
    :query [:find (pull ?h [*])
    :where
    [?h :block/marker ?marker]
    [(contains? #{"NOW" "DOING"} ?marker)]]
    :result-transform (fn [result]
    (sort-by (fn [h]
    (get h :block/priority "Z")) result))
    :collapsed? false}
    #+END_QUERY
  - The content of the above:
    <pre>
    {{renderer :todomaster}}\n#+BEGIN_QUERY\n{:title \"🔥 NOW 🔥\"\n    :query [:find (pull ?h [*])\n            :where\n            [?h :block/marker ?marker]\n            [(contains? #{\"NOW\" \"DOING\"} ?marker)]]\n    :result-transform (fn [result]\n                        (sort-by (fn [h]\n                                   (get h :block/priority \"Z\")) result))\n    :collapsed? false}\n#+END_QUERY
    </pre>
  - May depend on this ticket by adding rich texts to title: https://github.com/logseq/logseq/pull/5006
