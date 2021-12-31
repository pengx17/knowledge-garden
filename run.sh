#!/bin/bash
temp_tag_name=$(basename $(pwd))
docker build -t $temp_tag_name .
container_id=$(docker create $temp_tag_name)
docker cp $container_id:/home/logseq/graph-www www
docker rm $container_id
