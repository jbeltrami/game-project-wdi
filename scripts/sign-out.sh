#!/bin/bash

curl --include --request DELETE https://ga-wdi-boston.herokuapp.com/$ID \
  --header "Authorization: Token token=$TOKEN"
# data output from curl doesn't have a trailing newline
echo
