FROM ghcr.io/pengx17/logseq-app-publish:latest

WORKDIR /home/logseq
COPY . ./graph

RUN xvfb-run node publish.mjs -p ./graph
