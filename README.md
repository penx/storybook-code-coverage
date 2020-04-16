# Storybook code coverage

This is an example of how to set up a create-react-app application so that it collects coverage from:

- visual regression tests (storybook/chromatic)
- unit tests (jest)
- integration tests (cypress)

You can view a report for each type of test, or view the coverage of all tests together.

```
yarn
yarn coverage
open coverage/merged/lcov-report/index.html
```
