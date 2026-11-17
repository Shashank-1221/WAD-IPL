# IPL Ticket Booking

## Run locally

```sh
npm ci
npm run dev
```

## Deploy to GitHub Pages

The GitHub Actions workflow builds and deploys the site when changes are pushed
to `main`. In the repository, open **Settings → Pages** and set the source to
**GitHub Actions**. The site will then be available at:

https://shashank-1221.github.io/WAD-IPL/

## Standalone WAD booking demo

The HTML booking flow is also published at:

https://shashank-1221.github.io/WAD-IPL/wad-project/

Its Supabase table and row-level security policies are defined in
[`supabase/schema.sql`](./supabase/schema.sql).
