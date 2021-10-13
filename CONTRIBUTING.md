<p align="center">
  <p align="center">
    <a href="https://cumulus.tophat.cloud" target="_blank">
      <img src="https://jinui.s3.ap-northeast-2.amazonaws.com/tophat/logo.png" alt="Sentry" height="72">
    </a>
  </p>
</p>

# Contributing

Welcome and Thanks your suggestion! we ready for accept grateful idea.
Just throw your idea in the form of pull requests on [GitHub](https://github.com/tophat-cloud/tophat-cumulus-sdk).
Let's contribute and be a cumulus family!


## Environment

- node v14.16^
- yarn v1.22^


## Setup
```
npm install
yarn install
```


## Running SDK (via fork)

If you want to testing your version. you can just fork this repository and install your test project like belows:

```
npm install https://github.com/path/to/repo
yarn add https://github.com/path/to/repo
```

## Adding Tests

Any nontrivial fixes/features should include tests. we have a test folder.

You can write test code, about weakness logic is in `weakness.test.js`, the others are in `core.test.js`, also can suggest new kind of test code. please reference [./test](https://github.com/tophat-cloud/cumulus/tree/main/test).


## Running Tests

Running tests works:

```
yarn test
```

Note: can triggering to test for only `*.test.js`.

## Linting

Linting whole codes:

```
yarn lint
```

Note: we adopt [eslint](https://eslint.org/) for javascript linting.

## Considerations Before Sending Your First PR
When contributing to the codebase, please note:

- Non-trivial PRs will not be accepted without tests (see above).
- Please do not bump version numbers yourself.


## Publishing a Release
These steps are only relevant to Sentry employees when preparing and publishing a new SDK release.

1. Determine what version will be released (we use [semver](https://semver.org/)).
2. Update CHANGELOG.md to add an entry for the next release number and a list of 3. changes since the last release.
4. Run the Prepare Release workflow.
5. A new issue should appear in https://github.com/tophat-cloud/cumulus/issues.
6. Ask a member of the [@tophat-cloud](https://github.com/tophat-cloud) team to approve the release.
