# Combining Storybook, Cypress and Jest Code Coverage

Please refer to [this blog post for more detailed information](https://dev.to/penx/combining-storybook-cypress-and-jest-code-coverage-4pa5).

This project shows how to collect code coverage from Storybook (e.g. when using Chromatic for Visual Regression tests) and how to create a combined report for 3 types of test:

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

- Integration test report doesn't include full statistics for files with no coverage, though we work around this by first running a fake test via `yarn coverage:init`.
- Can't configure cypress-specific nyc settings outside of generic files (e.g. `package.json` or `.nycrc`), but this doesn't matter too much in this example as only Cypress is using these settings/
- Can't currently use create-react-app 3.4.1 - [facebook/create-react-app#8689](https://github.com/facebook/create-react-app/issues/8689).
