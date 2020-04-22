# Storybook code coverage

This project shows how to collect code coverage from Storybook (e.g. when using Chromatic for Visual Regresion tests) and how to create a combined report for 3 types of test:

- visual regression tests (storybook/chromatic)
- unit tests (jest)
- integration tests (cypress)

You can view a report for each type of test, or view the coverage of all tests together.

```sh
yarn
yarn coverage
open coverage/merged/lcov-report/index.html
```

## Combining coverage

You can also [merge reports with codecov](https://docs.codecov.io/docs/merging-reports).

## Known issues

- Integration test report doesn't include full statistics for files with no coverage
- Can't configure cypress-specific nyc settings outside of generic files (package.json/nycrc)
- Can't currently use create-react-app 3.4.1 - [facebook/create-react-app#8689](https://github.com/facebook/create-react-app/issues/8689)
