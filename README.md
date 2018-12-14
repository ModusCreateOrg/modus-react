# Modus React Application Scaffolding

Monorepo containing setup for a best-practice React application scaffolding

### Installing

```bash
npm i @modus/babel-preset-react @modus/eslint-config-modus @modus/more --registry=https://npm.modus.app/
```

Then use [sample project](../sample) as a basis for setting up `package.json`, `.eslintrc.yml`, and `babel.config.js`.

**TODO:** use `modus` CLI to do that automatically

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
