# workers-gateway

Connect to and invoking Lambda functions from inside Cloudflare Workers, without the use of API Gateway! This project is very WIP, both in implementation and in structure. This is a POC showing how to sign requests and pass them to Lambda, but in the future, it may make more sense to publish an NPM package that you can bring into your own Workers application. Watch the repo if you're interested!

# Usage

1. `cp .env.example .env`
1. Create a KV namespace in the Cloudflare UI called `WORKERS_GATEWAY`
1. Fill out your Cloudflare API details in `.env`
1. Put your AWS keys in Workers KV:

```
KEY="ACCESS_KEY_ID" VALUE="<access_key_id>" bin/write_to_kv
KEY="SECRET_ACCESS_KEY" VALUE="<secret_access_key>" bin/write_to_kv
```

1. Populate your `account_id` and optionally name your project in `wrangler.toml`.
1. `cp functions.example.js functions.js`
1. Map your Lambda functions using the instructions in `functions.js`
1. Deploy using `wrangler publish`
1. Bind the `WORKERS_GATEWAY` KV namespace to your script in the Workers UI
