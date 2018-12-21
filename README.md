# Modus React (MORe) Application Scaffolding

Monorepo containing setup for a best-practice React application scaffolding

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![MIT Licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)
[![Powered by Modus_Create](https://img.shields.io/badge/powered_by-Modus_Create-blue.svg?longCache=true&style=flat&logo=data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIwIDMwMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNOTguODI0IDE0OS40OThjMCAxMi41Ny0yLjM1NiAyNC41ODItNi42MzcgMzUuNjM3LTQ5LjEtMjQuODEtODIuNzc1LTc1LjY5Mi04Mi43NzUtMTM0LjQ2IDAtMTcuNzgyIDMuMDkxLTM0LjgzOCA4Ljc0OS01MC42NzVhMTQ5LjUzNSAxNDkuNTM1IDAgMCAxIDQxLjEyNCAxMS4wNDYgMTA3Ljg3NyAxMDcuODc3IDAgMCAwLTcuNTIgMzkuNjI4YzAgMzYuODQyIDE4LjQyMyA2OS4zNiA0Ni41NDQgODguOTAzLjMyNiAzLjI2NS41MTUgNi41Ny41MTUgOS45MjF6TTY3LjgyIDE1LjAxOGM0OS4xIDI0LjgxMSA4Mi43NjggNzUuNzExIDgyLjc2OCAxMzQuNDggMCA4My4xNjgtNjcuNDIgMTUwLjU4OC0xNTAuNTg4IDE1MC41ODh2LTQyLjM1M2M1OS43NzggMCAxMDguMjM1LTQ4LjQ1OSAxMDguMjM1LTEwOC4yMzUgMC0zNi44NS0xOC40My02OS4zOC00Ni41NjItODguOTI3YTk5Ljk0OSA5OS45NDkgMCAwIDEtLjQ5Ny05Ljg5NyA5OC41MTIgOTguNTEyIDAgMCAxIDYuNjQ0LTM1LjY1NnptMTU1LjI5MiAxODIuNzE4YzE3LjczNyAzNS41NTggNTQuNDUgNTkuOTk3IDk2Ljg4OCA1OS45OTd2NDIuMzUzYy02MS45NTUgMC0xMTUuMTYyLTM3LjQyLTEzOC4yOC05MC44ODZhMTU4LjgxMSAxNTguODExIDAgMCAwIDQxLjM5Mi0xMS40NjR6bS0xMC4yNi02My41ODlhOTguMjMyIDk4LjIzMiAwIDAgMS00My40MjggMTQuODg5QzE2OS42NTQgNzIuMjI0IDIyNy4zOSA4Ljk1IDMwMS44NDUuMDAzYzQuNzAxIDEzLjE1MiA3LjU5MyAyNy4xNiA4LjQ1IDQxLjcxNC01MC4xMzMgNC40Ni05MC40MzMgNDMuMDgtOTcuNDQzIDkyLjQzem01NC4yNzgtNjguMTA1YzEyLjc5NC04LjEyNyAyNy41NjctMTMuNDA3IDQzLjQ1Mi0xNC45MTEtLjI0NyA4Mi45NTctNjcuNTY3IDE1MC4xMzItMTUwLjU4MiAxNTAuMTMyLTIuODQ2IDAtNS42NzMtLjA4OC04LjQ4LS4yNDNhMTU5LjM3OCAxNTkuMzc4IDAgMCAwIDguMTk4LTQyLjExOGMuMDk0IDAgLjE4Ny4wMDguMjgyLjAwOCA1NC41NTcgMCA5OS42NjUtNDAuMzczIDEwNy4xMy05Mi44Njh6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+)](https://moduscreate.com)

## Goal: 0-config Best-Practice React Scaffolding

The goal of Modus-React (MORe) is to enable teams to use best-practice React scaffolding without having to worry about the config.

Although influenced by Create-React-App (CRA), this setup is different in a way that it gives more flexibility in some areas and takes away in others in an effort to promote healthy architectural patterns.

CRA is notorious for making it hard add customizations to Webpack or Babel without ejecting. MORe exposes configuration files to make it easier to extend.

MORe encourages specific design patterns that are enterprise-friendly. We discourage using hip new libraries in favor of proven industry-standard techniques.

## Installing

```bash
npm i @modus/babel-preset-react @modus/eslint-config-modus @modus/more --registry=https://npm.modus.app/
```

or shorter

```bash
npm i @modus/{babel-preset-react,eslint-config-modus,more} --registry=https://npm.modus.app/
```

Then use [sample project](../sample) as a basis for setting up `package.json`, `.eslintrc.yml`, and `babel.config.js`.

**TODO:** use `modus` CLI to do that automatically

## Using

### ENV variables

You can use environment variables to configure build scripts.

Here's the list of supported variables with their defaults:

```
SOURCE_DIR=src
BUILD_DIR=build
SOURCEMAPS=false
```

You can override any of these variables with `.env` files. We support these formats (in the order of inclusion):

```
.env.${NODE_ENV}.local
.env.${NODE_ENV}
.env.local
.env
```

The order of inclusion means that anything in `.env` will override content in e.g. `.env.development.local`.

### Extending Webpack

MORe processes a built in Webpack configuration. If your project has a `webpack.config.js` file in root, the build process will include it and pass the default config to it.

Make sure your configuration exports a function. The default configuration will be passed as an JavaScript object to the argument.

##### Example:

```js
// webpack.config.js

module.exports = defaultConfig => {
  return {
    ...defaultConfig,
    stats: false,
  };
};
```

### DLLs

DLLs precompile libraries to save time for development builds and re-builds.

React and React Router are included in DLLs by default. You can add other libraries by including them in package.json as an array in the `dll` property.

```json
"dll": [
  "foo"
]
```

### HTML Template

Use `TEMPLATE` environmental variable to specify custom HTML template relative to the project root.

HTML templates can consume variables. Variables are defined in `meta` property of the project's package.json.

```json
"meta": {
  "title": "My App"
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title><%= title %></title>
  </head>
  <body></body>
</html>
```

## Development

Make sure you have Lerna installed.

```sh
npm i -g lerna
lerna bootstrap
```

This is a monorepo with all packages needed for a successful React Application scaffolding.

### Adding dependencies

```sh
lerna add some-package --scope @modus/more
```

You can use the same command to add monorepo packages to one another (similar to `npm link`)

```sh
lerna add @modus/eslint-config-modus --scope @modus/more
```

### Publishing

The project is currently published to Modus internal npm repo [https://npm.modus.app](https://npm.modus.app). This will change once we have a stable project.

```sh
lerna publish
```

## Contributing

Take a look at the [project board](https://github.com/ModusCreateOrg/modus-react/projects/1) and see if there's anything you can help with. Once you find an item you could work on, please take ownership of the backlog item.

1. Create a fork
2. Create a WIP PR asap and reference (e.g. #4) the backlog item you're working on.
3. Complete work and tag reviewers
4. Let us know in Slack when you start and finish or when you need any help

# Modus Create

[Modus Create](https://moduscreate.com) is a digital product consultancy. We use a distributed team of the best talent in the world to offer a full suite of digital product design-build services; ranging from consumer facing apps, to digital migration, to agile development training, and business transformation.

[![Modus Create](https://res.cloudinary.com/modus-labs/image/upload/h_80/v1533109874/modus/logo-long-black.png)](https://moduscreate.com)

This project is part of [Modus Labs](https://labs.moduscreate.com).

[![Modus Labs](https://res.cloudinary.com/modus-labs/image/upload/h_80/v1531492623/labs/logo-black.png)](https://labs.moduscreate.com)

# Licensing

This project is [MIT licensed](./LICENSE).
