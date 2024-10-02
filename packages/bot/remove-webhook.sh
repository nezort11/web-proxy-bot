#!/usr/bin/env zsh

set -a
source .env
set +a

# Execute the "pnpm set-webhook" command with the extracted URL value
pnpm telegraf -m setWebhook -t $BOT_TOKEN_PROD -D "{ \"url\": \"\" }"
