# SH31 Main

## Name
University of Glasgow Systems Design Kit Overhaul

## Description
This project provides users with a framework for designing websites in accordance with the University of Glasgow's style and structure guide. It features user stories, Sass CSS files, and tests for them.

The codebase makes designing consistent websites easy - importing our framework means all your design components will be laid out and styled correctly.

The variables used can be found at [this link](https://design.gla.ac.uk/822fb39f4/p/72d586-university-of-glasgow-design-system)

## Setting up tests

Here is the general step by step process to run the tests yourself

    1. In the project root folder (where .gitnore is), open cmd in this folder
    2. Type and run - npm install
    3. Type and run - npx playwright install
    4. Now you should be able to run the tests by using - npm test

## Extra tests that are avialable

Launch a browser/UI mode for debugging


- Type and run - npx playwright test --ui

Run tests in specific browsers


1. Chromium - npx playwright test --project=chromium
2. Firefox - npx playwright test --project=firefox
3. Safari - npx playwright test --project=webkit

##Test Reports

If you would like a report at the end of the tests then simply run

    - npx playwright show-report

#Troubleshooting with tests

If playwright cannot find browsers run

    - npx playwright install

If scss fails to compile correctly run 

    - npx sass src/reset/reset.scss distribution/reset.css


## StyleLint tests

1. In the project root folder, open cmd
2. Type and install - npm install -D stylelint stylelint-config-standard-scss stylelint-scss postcss-scss
3. Run npm run lint:scss


## Visuals
Screenshots TBD

## Installation
Installation guide TBD

Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Usage TBD

Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Contact information for support can be found at [this link](https://design.gla.ac.uk/822fb39f4/p/6295aa-contact)

## Roadmap
Sprint 3 -> foundational tokens, browser reset, grid layout
Sprint 4 -> Utilities, Components
Sprint 5 -> Components continued
Sprint 6 -> Patterns (Combination of components)

## Authors and acknowledgment
Developers are as follows:

Razvan Tonca
Euan Galloway
Miroslav Boudny
Nelson Hearfield
Keiran Walker
Ethan Barry

Support from client members:

Katy Mitchell
Kris Purdy
Ashton Duncan-Whitelaw

## License
Copyright 2025 University of Glasgow

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Project status
In progress by main developers