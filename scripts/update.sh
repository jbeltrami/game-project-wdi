#!bin/bash
curl http://localhost:4741/games/${ID} \
--include \
--request PATCH \
--header "Authorization: Token token=$TOKEN" \
--data '{
  "game": {
    "id": 1,
    "cells": ["","","","","","","","",""],
    "over":false,
    "player_x": {
      "id": 1,
      "email": "and@and.com"
      },
    "player_o": {
      "id": 3,
      "email":
      "dna@dna.com"
    }
  }
}'
echo
