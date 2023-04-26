#!/bin/bash

DOMAIN="yourcooldomain.tld"
MAILBOX=$(cat /dev/urandom | tr -dc 'a-z0-9' | fold -w 20 | head -n 1)
echo "${MAILBOX}@$DOMAIN"

