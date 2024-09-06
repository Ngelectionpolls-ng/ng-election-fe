# Contributing to [NG-ELECTION-POLLS]

Thank you for considering contributing to [Project Name]! We welcome all kinds of contributions, including bug reports, feature requests, and code improvements.

## Table of Contents

- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)
  - [Development Workflow](#development-workflow)
   - [Branch Naming Rules](#branch-naming-rules)
   - [Commit Message Rules](#commit-message-rules)
   - [Submitting Pull Requests](#submitting-pull-requests)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

## Getting Started

1. Clone your the repository:
   ```sh
   git clone https://github.com/Ngelectionpolls-ng/ng-election-fe.git
   ```
2. Navigate to the project directory:
   ```sh
   cd ng-election-fe
   ```
3. Install dependencies:
   ```sh
   pnpm i
   ```
4. Start the local server to preview and interact with the app:
   ```sh
   pnpm run dev
   ```

## How to Contribute

1. Navigate to the /components

2. create a folder with the your component name and add index.tsx inside the folder.

   ```sh
   /components/<name-of-your-components>/index.tsx
   ```

3. render your component in the style-guides folder to view it on the browser.

   ```sh
   /app/styles-guides/page.tsx
   ```

4. Use [Shadcn] (https://ui.shadcn.com/docs/components) for all UI components

### Reporting Bugs

If you find a bug, please open an issue on [GitHub Issues](https://github.com/[username]/[project-name]/issues) and include as much detail as possible. Provide steps to reproduce, expected and actual behavior, and any relevant logs.

### Suggesting Features

If you have an idea for a new feature, please open an issue on [GitHub Issues](https://github.com/[username]/[project-name]/issues) and describe your proposal. Explain why the feature would be useful and how it should work.

#### Development Workflow

1. Create a new branch for your work:
   ```sh
   git checkout -b feat/<your-feature-name>
   ```
   ##### Branch Naming Rules
   - You will likely work on features, bug fixes, refactors (restructuring code without changing functionality), chores on the repo (routine tasks such as updating dependencies or changing configurations), or documentation. Each of the type of update should be used as a prefix your branch name as `feat/`, `refactor/`, `fix/`, `chore/`, or `docs/`

2. Make your changes, and commit them with descriptive messages:

   ```sh
   git commit -m "feat: your commit message"
   ```

   ##### Commit Message Rules

   Commit messages also follow a similar pattern.

   > Example: `refactor: use a single state for formData` or `refactor(HNG-1234): use a single state for formData`

> Please notice how both branch names an commit messages use the imperative tense. The imperative tense is a command or request, which makes it clear what the commit does. i.e., "fix login issue", NOT "I fixed login issue", and NOT "fixed login issue"

3. Push your branch to your forked repository:
   ```sh
   git push origin <your-branch>
   ```

   #### Submitting Pull Requests

1. Ensure your branch is up to date with your remote repository:
   ```sh
   git checkout dev
   git pull origin dev
   git checkout <your-branch>
   git rebase dev
   ```
   > You should regularly update your remote repository with changes from the dev branch

   > Make it a habit to run tests before creating pull requests.
2. Submit a pull request from your branch to the upstream repository.
3. In your pull request description, explain what changes you made and why.


## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). By participating, you are expected to uphold this code. Please report unacceptable behavior to [admin@ngelectionpolls.org].

## License

By contributing, you agree that your contributions will be licensed under the [Apache License](LICENSE).
