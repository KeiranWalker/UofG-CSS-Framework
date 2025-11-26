# SH31 Main

<<<<<<< Updated upstream
Is this the main branch

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!


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
    
## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://stgit.dcs.gla.ac.uk/team-project-h/2025/sh31/cs39-main.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://stgit.dcs.gla.ac.uk/team-project-h/2025/sh31/cs39-main/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Set auto-merge](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing (SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thanks to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README

Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

=======
>>>>>>> Stashed changes
## Name
University of Glasgow Systems Design Kit Overhaul

## Description
This project provides users with a framework for designing websites in accordance with the University of Glasgow's style and structure guide. It features user stories, Sass CSS files, and tests for them.

The codebase makes designing consistent websites easy - importing our framework means all your design components will be laid out and styled correctly.

The variables used can be found at [this link](https://design.gla.ac.uk/822fb39f4/p/72d586-university-of-glasgow-design-system)

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