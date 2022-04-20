- #+BEGIN_QUERY
          [:find (pull ?p [*]) (count ?b)
           :where
           [?b :block/page ?p]
           [?p :block/journal? true]
           [?p :block/journal-day ?d]
           [?b :block/content ?c]
           [(clojure.string/blank? ?c) ?empty]
           [(not ?empty)]
           [(>= ?d ${formatAsParam(date0)})]
           [(<= ?d ${formatAsParam(date1)})]]
  #+END_QUERY