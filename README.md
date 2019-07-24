# React magma

## Known Issues

1. `Legacy context API has been detected within a strict-mode tree` - https://github.com/JedWatson/react-select/pull/3487

## Getting started

### Setup requirements

1. Your project needs to be running **React v16.5** or greater
2. Make sure you have a `.npmrc` file and are using http://nexus.mindtap.corp.web/content/groups/npm.group/ as your registry.

```sh
registry=http://nexus.mindtap.corp.web/content/groups/npm.group/
```

### Add the react-magma components to your project

```sh
npm install --save react-magma-dom
```

### Install the Babel Plugin

<details>
  <summary>
  Learn more about this Babel plugin:
  </summary>

This custom Babel plugin will help with optimization. This plugin will go through all of your `react-magma-dom` imports and get rid of any unnecessary imports. This will allow webpack to only put the necessary dependencies in your projects final build.

</details>

#### Add the plugin as a dev dependency

```sh
npm install --save-dev babel-plugin-react-magma-dom
```

#### Configure the plugin in your Babel config

In your `babel.config.js` file add `react-magma-dom` to your `plugins` array.

example `babel.config.js`:

```js
module.exports = {
  presets: ['@babel/preset-react'],
  plugins: ['react-magma-dom']
};
```

### Documentation

[React Magma Documentation](http://react-magma.apps.dev.cengage.io/)

We have a documentation site that show all of the available components, usage of the components, and design guidelines from the UX team for how to use them in your project.

## Contributing

### Dependencies

Node v10.x or greater with npm 6.1.x or greater

### Steps to run documentation locally

1. Clone this repo:

```sh
git clone ssh://git@stash.corp.web:7999/front/react-magma.git
```

2. Install the project's dependencies with the `npm ci` command

   <details>
     <summary>Why npm ci?</summary>

   Using `npm ci` instead of `npm install` will install dependencies based on `package-lock.json` so you will get specific package versions and it should also speed up the install.

   </details>

```sh
npm ci
```

3. Run the development server for the docs

```sh
npm run docs
```

**Note:** _If you get errors about a missing typescript module during step three, you may need to run `npm i -s -D typescript` from `packages/react-magma-native` and rerun the previous two commands._

4. Visit the docs at [http://localhost:3000](http://localhost:3000).

### Project structure

The project is built using a monorepo structure with the help of [Lerna](https://github.com/lerna/lerna).

Each folder under the `packages` folder is it's own, independent package. Each package can be built and deployed as a node module, or in the case of an app like `react-magma-docs`, it can be built and served as if it had its own repository.

Lerna handles dependencies within the monorepo, using symlinks to connect dependent packages. For example, `react-magma-dom` uses `react-magma-core` and `react-magma-docs` uses `react-magma-dom`. When a dependent project is build the consuming project automatically gets the latest build.

#### Source organization

The component library itself is broken out into multiple projects.

The `react-magma-core` project is render-agnostic, meaning it does not have a specific rendering target and can be used in any environment that runs React, whether that is a browser, React Native, React VR, or some future rendering target we haven't explored yet. This "core" project handles internal state management and logic so it can be shared between component implementations that target specific environments.

The `react-magma-dom` package is the browser-specific version of the components. The components utilize `react-magma-core` and handle the DOM specific rendering for those components.

### Making changes

The source code for each independent package in the project can be found under the `packages` folder.

You will likely end up making changes to multiple packages. Core and the implementation for your render target will typically be changed in tandem, and any changes to public facing APIs will require that your PR also include accurate updates to the docs.

### Running tests

Each package has a `test` command. You can run them from the individual package, or you can run them from the root of the project.

Running `npm run test` or `npm run test-watch` from inside a specific package will run the tests for that package.

Running `npm run test` from the repository root will run the `test` command for all packages that include tests.

You can also run specific tests from the repository root with:

```sh
# run the dom tests
npm run test-dom
```

or

```sh
# run the core tests
npm run test-core
```

`npm run covg` to see the generated lcov coverage reports.

### Building

Once you have finished making your code changes and have tested your changes run `npm run build`.

Because of the linking provided by Lerna, making changes in `react-magma-core` will immediately be reflected in the `react-magma-dom`.

### End to End Testing

We use [Cypress](https://cypress.io) to create our e2e tests. These tests live in the `e2eTesting` package.

#### Running the Cypress tests

From the `e2eTesting` package, run:

```sh
npm run test:dev
```

**Note:** _This will run the Cypress UI, to run in headless mode, run:_

```sh
npm run test
```

#### Create a Cypress test

All of the components are found in the `App.js` file. If you have a new component be sure to import it here and add it to the render.

Test files are under the `cypress/integration` folder.

### Updating the docs

The `react-magma-gatsby-docs` is the project for the documentation site. Any changes to the public API of an existing component or the creation of a new component should be documented here.

This project uses [MDX](https://mdxjs.com/), allowing the combination of Markdown and React components.

Each component has it's own `.mdx` file. If you have created a new component you will need to create a new `.mdx` file under the `pages/api` folder. To import your new component go to the `layout.js` file, import your new component, then add it to the `scope` prop array of the `LiveProvider`. Now you are able to use the component in your newly created `.mdx` file.

Be sure to add in the navigation details at the top of the page in the front matter.

```yaml
---
title: '{ComponentName}'
order: 2
---

```

and import a link to the design guidelines with the correct route

```js
import DocsHeading from '../../components/docs-heading';

<DocsHeading to="/design/{component}/" type="design">
  {ComponentName}
</DocsHeading>;
```

### Running the docs locally

You can run the docs from the repository root with

```
npm run docs
```

or from the package directory with

```
npm run develop
```

then visit the docs at [http://localhost:8000](http://localhost:8000)

### Committing code

This project adheres to [SemVer](https://semver.org/) and enforces a specific commit message format.

Commit messages for this project follow [the conventional commit format](https://www.conventionalcommits.org/en/v1.0.0-beta.2/).

This is enforced with a `commit-msg` hook via [Husky](https://github.com/typicode/husky) which also runs linting, prettier and tests prior to allowing a commit.

To make it easier to adhere to this format, there is a root level npm script that will help format your commit message.

**After adding your files to the git stage**, run:

```
npm run cm
```

<details>
  <summary>Learn more about SemVar and the commit message format:</summary>
  
  SemVer is just a responsible way to release packages and it's the right thing to do.
  
  Enforcing a commit message format allows us to automate version number changes, manage release channels (`latest`, `next`, `previous`, `x.x.x-beta.x`, etc.), and automate the creation of a consistent changelog and automate releases.

All commits will have a topic and short description with an optional subject.

There is a short version of the format that will pass the `commit-msg` check and a longer version for handling changes that need more explanation and for marking commits that contain breaking changes.

#### Commit message components:

- type (required)
- subject
- description (required)
- body
- footer (required _if_ there are breaking changes)

##### Types

The type is key in determining how to bump the version number in the next version number change. Available types are:

- `feat` - commit adds a new feature
- `fix` - commit fixes a bug
- `docs` - commit changes documentation only
- `test` - commit adds missing tests or corrects existing tests
- `refactor` - commit only has refactoring, code has changed but behavior and tests retain original functionality
- `perf` - like refactor, but the focus is on performance
- `build` - changes that affect the build system or external dependencies
- `ci` - commit changes CI configuration files
- `revert` - reverts a previous commit
- `style` - Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `chore` - other changes that don't modify source or test files

##### Subject

The subject is an optional identifier. For example, if adding a new feature to a `Modal` component, you might use `modal` as your subject to provide context.

##### Description

Short description of the commit. The `commitlint` rules enforce a max length of 72 characters for the header, which is made up of the type, subject and description, along with the added characters to match the commit format, for example: `feat(modal):added support for closing via esc key`

##### Body

If the short description isn't enough to cover the details of your change, you can add more text in the body to expand on what the commit does and provide all the details you want.

##### Footer

The footer is where you designate a breaking change. So if you add a feature and that necessitates breaking changes to the existing API, you would use `feat` for the type and in the footer, you would add `BREAKING CHANGE: description of the breaking change`

#### Short commit message format

```bash
#format - with subject
git commit -m "<topic>(<subject>): <short description>"

#example - with subject
git commit -m "feat(button): Added icon capabilities to button"

#format - no subject
git commit -m "<topic>: <short description>"

#example - no subject
git commit -m "feat: Added icon capabilities to button"
```

#### Long commit message format (with a breaking change)

```bash
#format
git commit -m "<type>(subject): <short description>

<optional body>

<optional footer>"

#example
git commit -m "feat(button): Added icon capabilities to button

More verbose description of what was added with the icon feature of the button.

BREAKING CHANGE: description of what part of the API brakes with this commit"
```

#### Commit Tooling

To facilitate getting the commit format right, you can create your commit messages by adding the files you want to commit with `git add <files>` then by running `npm run cm`, which will step you through the individual parts of the commit message.

##### Selecting a topic from the predefined list

![running npm run cm shows the topic selector screen for commitizen](./readme_assets/commitizen_topic.png)

##### Walking through the remaining questions

![commitizen guides you through entering scope, description, optional body and footer by prompting yes or no for breaking changes](./readme_assets/commitizen_scope_thru_end.png)

##### The resulting commit produced by the wizard

![the resulting commit produced by commitizen](./readme_assets/commitizen_resulting_commit.png)

##### Retry

If the `pre-commit` scripts prevent your commit due to a test or linting failure, you can fix those items, `git add` those updates and rather than going through the commit message wizard again, you can retry with `npm run cm-retry`.

</details>
