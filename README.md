# Storybook code coverage

This is an example of how to set up a create-react-app application so that it collects coverage from:

- visual regression tests (storybook/chromatic)
- unit tests (jest)
- integration tests (cypress)

You can view a report for each type of test, or view the coverage of all tests together.

```sh
yarn
yarn start &
yarn coverage
open coverage/merged/lcov-report/index.html
```

## Known issues

- Integration test report doesn't include files with no coverage: https://github.com/cypress-io/code-coverage/issues/194
- Can't configure cypress-specific nyc settings outside of package.json (tbc)
- Can't currently use create-react-app 3.4.1 - https://github.com/facebook/create-react-app/issues/8689