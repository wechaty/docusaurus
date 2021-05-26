## Welcome to How to Guide

[![GitHub Pages CI](https://github.com/wechaty/wechaty.js.org/workflows/GitHub%20Pages%20CI/badge.svg)](https://github.com/wechaty/wechaty.js.org/actions?query=workflow%3A%22GitHub+Pages+CI%22)
[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg)](https://github.com/Wechaty/wechaty)
[![DIVIO documentation system](https://img.shields.io/badge/DIVIO-Documentation%20System-blue)](https://documentation.divio.com/)

![Wechaty Docusaurus](how-to-guide.png)

How to Guide is important because it guides us through the steps involved in addressing key problems and use-cases.

## How to Contribute to this section

**Step 1.** Fork this repository.

**Step 2.** Create your new branch.

```yaml
git checkout -b <your-branch-name>

# Replace <your-branch-name> with your desired name
# Helps you apply changes to the newly created branch
```

**Step 3.** Contribute to the section.

**Step 4.** Run test for file check and solve the issue, if prompted.

```yaml
npm run test

# Run the tests before deploying the project to Surge
```

**Step 5.** Add changes to the staging area.

```yaml
git add .

# Add all the changes in the working directory to the staging area
```

**Step 6.** Commit your changes.

```yaml
git commit -m "your-commit-message"

# Replace <your-commit-message> with your short-message
# Captures a snapshot of the project's currently staged changes 
```

**Step 7.** Push your changes to GitHub.

```yaml
git push origin <your-branch-name>

# Enter <your-branch-name> that you created with step 2
# Upload local repository content to a remote repository
```

**Step 8.** Create new Pull Request.

**Step 9.** Make sure to pass all the Test Cases.

![PR-checks](https://user-images.githubusercontent.com/69477761/119541944-9e223a80-bdac-11eb-9891-d20bd87634a7.png)

## How to Run Locally

**Step 1.** Clone this repository:

```yaml
git clone "https://github.com/wechaty/wechaty.js.org"

# Make a clone of the repo at a new location
```

**Step 2.** Run the commands :

```yaml
a. npm install
b. npm run docusaurus:build
c. npm run docusaurus:serve

# Enter <your-branch-name> that you created with step 2
# Make a clone the repo at a new location
```

![npm run docusaurus:build](https://user-images.githubusercontent.com/69477761/119619468-a8325080-be21-11eb-977e-d9e61b0cd5cb.png)

![npm run docusaurus:serve](https://user-images.githubusercontent.com/69477761/119619344-820cb080-be21-11eb-889d-e699d7cc706e.png)

**Step 3.** The site will be running locally on.

```yaml
http://localhost:3000
```

![localhost](https://user-images.githubusercontent.com/69477761/119619476-a9637d80-be21-11eb-98a9-f0ee840595b2.png)

## Copyright & License

- Code & Docs © 2016-now Wechaty Contributors <https://github.com/wechaty>
- Code released under the Apache-2.0 License
- Docs released under Creative Commons
