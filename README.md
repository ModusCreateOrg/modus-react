# Modus React Application Scaffolding

Monorepo containing setup for a best-practice React application scaffolding

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
