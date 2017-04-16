#!/bin/bash

curl --include --request PATCH https://ga-wdi-boston.herokuapp.com/$ID \
# curl --include --request PATCH http://localhost:4741/change-password/:id \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "123",
      "new": "1234"
    }
  }'

# data output from curl doesn't have a trailing newline
echo
