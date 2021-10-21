<p align="center">
  <p align="center">
    <a href="https://cumulus.tophat.cloud" target="_blank">
      <img src="https://jinui.s3.ap-northeast-2.amazonaws.com/tophat/logo.png" alt="Cumulus" height="72">
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

## Adding New Weakness
If you found new weakness logic then add file to `./src/weakness/{name}.js`

- each files on weakness directory are for finding each weakness.
- also the file name will be report type name on cumulus service.

For a case study, when you want to writing a logic about CSRF, create `csrf.js`:
```javascript
class CSRF { // set class name as upper camel case
  checkString(data) {
    let isDetected = false;

    // TODO something to write for detection logic

    return isDetected; // must to be return boolean type
  }
}

module.exports = new CSRF();
```

## Improve Exsited Weakness
If you want to contribute to exsited weakness logic, you can touch on middle of weakness class code:
```javascript
class Xss {
  checkString(data) {
    let isDetected = false;
    
    const regExp = /<|>|&lt;|&gt;|&amp;|&quot;|&apos;/;
    isDetected = regExp.test(data);

    // TODO something to write for improve logic

    return isDetected;
  }

  // NOTE or you can add new function like `checkType(data)`
}

module.exports = new Xss();
```


## Adding Tests

Any nontrivial fixes/features should include tests. we have a test folder.

You can write test code, about weakness logic is in `weakness.test.js`, the others are in `core.test.js`, also can suggest new kind of test code. please reference [./test](https://github.com/tophat-cloud/cumulus/tree/main/test).

Don't forget to add test code when you add new logic for weakness!

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


## Versioning & Branch
- We adopt [semver](https://semver.org) as versioning.
- We adopt Git Flow branch strategy.


## Considerations Before Sending PR
When contributing to the codebase, please note:

- Non-trivial PRs will not be accepted without tests (see above).
- Please do not bump version numbers yourself.
- Please use [template](https://github.com/tophat-cloud/cumulus/blob/main/.github/ISSUE_TEMPLATE/bug_report.md) as much as possible


## Found an Issue?
If you have found a bug then raise an issue on the cumulus repo: https://github.com/tophat-cloud/cumulus/issues

Its worth checking to see if its already been reported, and including as much information as you can to help us diagnose your problem.


## Got a Question or Problem?
If you have a question or problem relating to using Cumulus then you can contact to [Email](mailto:team@tophat.cloud).

Or please visit user group on [Discord](https://discord.gg/BH7h6F2C7N)


## Publishing a Release
These steps are only relevant to Cumulus employees when preparing and publishing a new SDK release.

1. Determine what version will be released (we use [semver](https://semver.org/)).
2. Update [CHANGELOG.md](https://github.com/tophat-cloud/cumulus/blob/main/CHANGELOG.md) to add an entry for the next release number and a list of 3. changes since the last release.
4. Run the Prepare Release workflow.
5. A new issue should appear in https://github.com/tophat-cloud/cumulus/issues.
6. Ask a member of the [@tophat-cloud](https://github.com/tophat-cloud) team to approve the release.
