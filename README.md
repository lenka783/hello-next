# Next.js template

This is a _super minimal_ starter for using Next.js with the modern App Router.

Not intended for use in production. Purely used for educational reasons.

## Running a development server

First, install the dependencies:

```bash
$ npm install
```

Then, start a local development server:

```bash
$ npm run dev
```

## Troubleshooting

- Please make sure you're using Node.js version 18.17 or higher. This is the minimum Node version required by Next.js.
  - You can find your current Node version by running `node -v` in a terminal. If the value is less than 18.17, you'll want to upgrade Node to the [current LTS (Long Term Support) version](https://nodejs.org/en).

# Hit Counter exercise

Your mission is to add a working hit counter to the homepage, by using `database.json` as the source of truth.

## Running a development server

First, install the dependencies:

```bash
$ npm install
```

Then, start a local development server:

```bash
$ npm run dev
```

## Next App Router + styled-components

This repo is meant to be used as part of an exercise in [The Joy of React](https://www.joyofreact.com/).

## Running a development server

First, install the dependencies:

```bash
$ npm install
```

Then, start a local development server:

```bash
$ npm run dev
```

## Troubleshooting

You may get an error like `ERESOLVE unable to resolve dependency tree`.

This happens because styled-components currently has a hard dependency on React 18. This is the version used by this workshop and specified in the lockfile, so you shouldn’t run into this problem if you use the NPM package manager to install the dependencies.

If you’d like to use the latest version of Next/React, you can solve this problem by adding the following flag to your NPM install command:

```bash
$ npm install --legacy-peer-deps
```

This flag instructs NPM to ignore any hard dependencies, allowing styled-components to be used with Next 15 / React 19.
