# web proxy bot

```sh
nvm use
pnpm

pnpm dev
```

Deploy to production

```sh
pnpm build
pnpm serverless:deploy
pnpm serverless:info

# => MAKE FUNCTION - PUBLIC IN THE YANDEX CLOUD CONSOLE
open "https://console.cloud.yandex.ru/"

pnpm webhook:set
```

Clear resource and reset

```sh
pnpm purge
pnpm webhook:remove
```
