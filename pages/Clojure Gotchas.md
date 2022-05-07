- `flatten` will do flat recursively
- `=` compares values, not the identity (reference)
  - https://clojure.org/guides/equality
  - `=` for single value is always true, even for `nil`
  - map's order is not significant
    - ```clojure
      ;; = can be used to compare the equality of nested Clojure data structures
      (= {:a [1 {1 2}] :b 'ok :c "string"}
         {:b 'ok :c "string" :a '(1 {1 2})})
      ;;=> true
      ```
  -
- `every?` + `some`, (not `some?`, which is to testify if something is `nil`)
- plain number literals in Clojure is `long` (int 64), but for JS, this will be `double` (float64)
-
