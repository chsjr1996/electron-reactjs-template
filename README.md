# Electron ReactJS template

![electron-reactjs-template-cover](https://repository-images.githubusercontent.com/250954487/fa559280-786a-11ea-8aa5-997defa997f9)

This is an electron template that use ReactJS for renderer process. It's only a simple template for allow you to add more logic and packages for both browser and renderer process.

---

## Requirements

- NodeJS > v13
- Npm

---

## Main technologies

- Electron 9
- ReactJS 16
- React Router Dom 5
- Typescript 3
- And others...

---

## Installation

Clone and install dependencies

- `git clone https://github.com/chsjr1996/electron-reactjs-template.git`
- `npm install`

For compile all ReactJS files in a bundle package and Browser TS files for execute Electron use:

- `npm run dev`

This command execute concurrently the two below commands:

- `npm run dev:webpack` and `npm run electron:compile`

The `npm run dev:webpack` compile all ReactJS files and `npm run electron:compile` all TS files in Browser directory for electron execution.

> Note: The `npm run dev:electron:run` command, this wait for webpack server (where ReactJS will run) and execute the **start-dev.js** script for open electron process.

> Note: You can use only `npm run dev:webpack` process or only `npm run electron:compile` or `npm run dev:electron:run`, but remember that the last command wait for webpack server and electron can't run without it

---

## Build

For now, only linux build is available, and it's in .deb and .pacman format. If you want build, then use:

- `npm run build:linux`

This command will "compile" Electron (tsc), ReactJS (webpack) and execute **electron-builder** to generate linux packages.

> TODO: Generate more Linux packages format, and when possible Windows and MacOS too.

---

## Notes about development

I will try to keep this project up to date and add some necessary resources, but never running away from the objective of the model, which is simple. For other advanced features I will create other repositories.

If you have a suggestion or detect a bug, please open issue in this repository.

---

License: MIT
