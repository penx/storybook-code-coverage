# Combining Storybook, Cypress and Jest Code Coverage

Please refer to [this blog post for more detailed information](https://dev.to/penx/combining-storybook-cypress-and-jest-code-coverage-4pa5).

This project shows how to collect code coverage from Storybook (e.g. when using [Chromatic](https://www.chromaticqa.com) for Visual Regression tests) and how to create a combined code coverage report for 3 types of test:

- Visual regression tests ([Storybook](https://storybook.js.org)/[Chromatic](https://www.chromaticqa.com))
- Unit tests ([Jest](http://jestjs.io))
- Integration tests ([Cypress](http://cypress.io))

You can view a report for each type of test, or view the coverage of all tests together.

To try out this project this locally:

```sh
git clone git@github.com:penx/storybook-code-coverage.git
cd storybook-code-coverage
yarn
yarn coverage
open coverage/merged/lcov-report/index.html
```

## Combining coverage

You can also [merge reports with codecov](https://docs.codecov.io/docs/merging-reports).

## Known issues

- cypress-specific nyc settings have to go in to generic files (e.g. `package.json` or `.nycrc`)
- There's a bug with create-react-app@3.4.1 that prevents this from working, so for now you have to roll back to 3.4.0 [facebook/create-react-app#8689](https://github.com/facebook/create-react-app/issues/8689).
