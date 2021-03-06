- [[Elasticsearch]] + [[Logstash]] + [[Kibana]]
  - <a style="width:720px;height:140px" class="link_preview__root"><div class="link_preview__card-container"><div class="link_preview__text-container"><div class="link_preview__text-container-title">The ELK Stack: From the Creators of Elasticsearch</div><div class="link_preview__text-container-description">What is the ELK Stack? The ELK Stack is an acronym for a combination of three widely used open source projects: E=Elasticsearch (based on Lucene), L=Logstash, and K=Kibana. With the addition of Beats, the ELK Stack is now known as the Elastic Stack</div><div class="link_preview__text-container-url-container"><img src="https://www.elastic.co/favicon-32x32.png" width="16" height="16"/><span class="link_preview__text-container-url">https://www.elastic.co/what-is/elk-stack</span></div></div><div class="link_preview__cover-container"><img class="link_preview__cover-image" src="https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt9c5291cc47b39d26/5c11ee02a6ed043c0dbb01d1/elk-stack-elastic-soup.svg" alt="cover"/></div></div></a><style>.link_preview**root{border:1px solid var(--ls-border-color);border-radius:6px;cursor:pointer;display:block;overflow:hidden;text-decoration:none;user-select:none}@media (max-width:1200px){.lsp-hook-ui-slot .link_preview**root{max-width:640px}}@media (max-width:760px){.lsp-hook-ui-slot .link_preview**root{max-width:480px}}.link_preview**root,.link_preview**root \*{box-sizing:border-box}.link_preview**root:hover{border:1px solid rgba(97,106,229,.5)}.link_preview**card-container{align-items:stretch;background-color:var(--ls-secondary-background-color);display:flex;height:100%;justify-content:space-between;width:100%}.link_preview**text-container{display:flex;flex:2;flex-flow:column;overflow:hidden;padding:12px 16px}.link_preview**cover-container{flex:1}.link_preview**text-container-title{color:var(--ls-primary-text-color);flex-shrink:0;font-size:16px;font-weight:500;line-height:26px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.link_preview**text-container-description{color:var(--ls-secondary-text-color);display:flex;flex-grow:1;font-size:12px;font-weight:400;line-height:20px;margin-top:6px;overflow:auto}.link_preview**text-container-description&gt;\*{align-self:center;flex:1}.link_preview**text-container-url-container{align-items:center;color:var(--ls-primary-text-color);display:flex;flex-direction:row;flex-wrap:nowrap;font-size:12px;height:17px;line-height:17px;margin-top:6px;min-width:0}.link_preview**text-container-url-container&gt;img{margin-right:8px}.link_preview**text-container-url{flex-grow:0;flex-shrink:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.link_preview**cover-image{float:right;height:100%;min-width:150px;object-fit:cover;overflow:hidden}.link_preview\_\_root img{box-shadow:unset;margin-left:unset}</style>
- [The Complete Guide to ELK Stack](https://logz.io/learn/complete-guide-elk-stack/#elasticsearch)
  - **Elasticsearch**
    - built on top of Apache Lucene
    - A NoSQL database
    - has a strong focus on search capabilities and features
    - **Basic concepts**
      - index
        - logical partitions of documents
      - documents
        - JSON objects that are stored within an index and are considered the base unit of storage
        - https://www.elastic.co/guide/en/elasticsearch/reference/8.1/documents-indices.html#documents-indices
      - types
      - mapping
      - shards
      - replicas
    - Query is a superset of "Lucene"?
  - **Logstash**
    - handle streaming of log data, processing, transforming and storage
  - **Kibana**
    - the web ui
- [Elasticsearch : Meaning of "@" symbol](https://stackoverflow.com/questions/39153596/elasticsearch-meaning-of-symbol)
  - `@` doesn't have a special meaning inside Elasticsearch.
  - Logstash uses this convention to define some "metadata" fields for the events, like `@timestamp` and `@version`.
  - -
    -
    -
-
