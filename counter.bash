#!/bin/bash

#cat Glass.txt | head -15

#cat Glass.txt | tr '[:upper:]' '[:lower:]' | grep -oE "\w{2,}" | head -15

cat Glass.txt | tr '[:upper:]' '[:lower:]' | grep -oE "\w{2,}" | 
    sort | uniq -c | grep -Fvwf stopwords | sort -nr |head -15
