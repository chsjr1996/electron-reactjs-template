# Electron ReactJS template

![electron-reactjs-template-cover](https://repository-images.githubusercontent.com/250954487/fa559280-786a-11ea-8aa5-997defa997f9)

This is a electron template that use ReactJS for renderer process. It's only a simple template for allow you add more logic and packages for both browser and renderer process.

---

## Requirements

- NodeJS > v13
- yarn or npm

---

## Installation

Clone and install dependencies

- `git clone https://github.com/chsjr1996/electron-reactjs-template.git`
- `yarn` or `npm install`

For compile all ReactJS files in a bundle package and Browser TS files for execute Electron use:

- `yarn dev`

This command execute concurrently the two below commands:

- `yarn dev:webpack` and `yarn dev:electron:compile`

The `yarn dev:webpack` compile all ReactJS files and `yarn dev:electron:compile` all TS files in Browser directory for electron execution.

> Note: The `yarn dev:electron:compile` after compile process run the `yarn dev:electron:run` command, this wait for webpack server (where ReactJS will run) and execute the **start-dev.js** script for open electron process.

> Note: You can use only `yarn dev:webpack` process or only `yarn dev:electron:compile` or `yarn dev:electron:run`, but remember that the last command wait for webpack server and electron can't run without it

---

## Notes about development

I will try to keep this project up to date and add some necessary resources, but never running away from the objective of the model, which is simple. For other advanced features I will create other repositories.

If you have a suggestion or detect a bug, please open issue in this repository.

---

License: MIT
