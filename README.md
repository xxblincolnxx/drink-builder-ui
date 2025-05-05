# Run this project through the service worker to test PWA functionality:

**Prerequisites**: You need to have [https-localhost](https://www.npmjs.com/package/https-localhost) installed on your machine.

```bash
npm run build
npm run serve
```

Toggle offline mode through "application" tab and service worker location inside dev tools.

NOTE: There's no hot-reload.

# ThisTech Stack (where to read):

- [vite-pwa-plugin](https://vite-pwa-org.netlify.app/guide/) for the service worker
- [Dexie](https://dexie.org/docs/Tutorial/React) for an interface layer for IndexedDB (offline persistence)
- [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction) for local state management
- [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview) for mutations
- [TanStack Router](https://tanstack.com/router/latest/docs/framework/react/overview) for routing

# Using React Query (TanStack)

- Create your queries inside of `src/utilities/queries` directory as stand along `.ts` files
- Add specific query configurations inside of `src/utilities/queries/queryOptions.ts` which will be consumed within components with `useQuery(<options>)`

# Using State Management (Zustand)

- Create a store for each domain of state within `src/utilities/zustand`
- Direct mutation of state is possible using Immer middleware so import and wrap your store in `immer({<your state>})`
- Don't export the entire store, only export "selector" hooks that provide specific bits of state but don't try to combine them like you would in redux.
