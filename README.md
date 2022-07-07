# Turborepo starter with pnpm

This is an official starter turborepo.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a packages manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org) app
- `web`: another [Next.js](https://nextjs.org) app
- `@rs-client/design-system`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

This repository is used in the `npx create-turbo@latest` command, and selected when choosing which package manager you wish to use with your monorepo (pnpm).

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
pnpx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)

## Turborepo Pipeline Notes

See above link to [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)

```js
const goesInTurboJsonFile = {
  $schema: "https://turborepo.org/schema.json",
  pipeline: {
    build: {
      // A package's `build` task depends on that package's
      // topological dependencies' and devDependencies'
      // `build` tasks  being completed first
      // (that's what the `^` symbol signifies).
      dependsOn: ["^build"],
    },
    test: {
      // A package's `test` task depends on that package's
      // own `build` task being completed first.
      dependsOn: ["build"],
      outputs: [],
      // A package's `test` task should only be rerun when
      // either a `.tsx` or `.ts` file has changed.
      inputs: ["src/**/*.tsx", "src/**/*.ts", "test/**/*.ts", "test/**/*.tsx"],
    },
    lint: {
      // A package's `lint` task has no dependencies and
      // can be run whenever.
      outputs: [],
    },
    deploy: {
      // A package's `deploy` task depends on the `build`,
      // `test`, and `lint` tasks of the same package
      // being completed.
      dependsOn: ["build", "test", "lint"],
      outputs: [],
    },
  },
};
```
