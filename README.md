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
