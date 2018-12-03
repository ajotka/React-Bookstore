# ![netkata](https://netkata.com/assets/img/logo-netkata.png) Netkata Frontend Starter Pack

[![pipeline status](https://git.netkata.com/netkata/starter-front/badges/starter-v2/pipeline.svg)](https://git.netkata.com/netkata/starter-front/commits/starter-v2)

We proudly present a front-end pack. For some time, it has been making life easier at work. We hope that it will help you too!

## Features

* Provides modern frontend tooling with little to no configuration
* Transpiles only unsupported things

## Prerequisites

* Node.js in latest LTS version - https://nodejs.org/en/download/
* Yarn - https://yarnpkg.com/en/docs/install

## Quick start

1. Copy contents of this repository to the root of your project.
2. Run `yarn` to install dependencies from package.json.
3. Change proxy URL path in [`webpack.config.js`](webpack.config.js) to local URL of site you are developing (i.e. `http://netkata.localhost`):
*(if you want to use our pack with laravel, you can find other config in [`_laravel.webpack.config.js`](_laravel.webpack.config.js))*

```javascript
proxy('/', {
    target: '<URL_HERE>',
    changeOrigin: true,
}),
```
4. Optionally, configure browsers

## Scripts

### Build dependencies:

```yarn install```

### Running project in development version:

```yarn start```

### Production build:

```yarn build```

### Stylelint (CSS linter):

```yarn run lint:css```

### ESLint (JS linter):

```yarn run lint:js```

## Additional info

### Tools used

* [Webpack](https://webpack.js.org/) ([docs](https://webpack.js.org/configuration/)) with [webpack-command](https://github.com/webpack-contrib/webpack-command) and [webpack-serve](https://github.com/webpack-contrib/webpack-serve)
* [Babel](https://babeljs.io/) ([docs](https://babeljs.io/docs/en/)), with following presets:
    * [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env)
    * [babel-preset-react](https://babeljs.io/docs/en/babel-preset-react)
* [ESLint](https://eslint.org/) ([docs](https://eslint.org/docs/user-guide/configuring)), with [eslint-config-airbnb](https://github.com/airbnb/javascript)
* [Stylelint](https://stylelint.io/) ([docs](https://stylelint.io/user-guide/)) with [custom config](.stylelintrc)

### Editor plugins

We recommend installing those plugins for your editor of choice:

* Sublime Text:
    * https://packagecontrol.io/packages/SublimeLinter
    * https://packagecontrol.io/packages/SublimeLinter-eslint
    * https://packagecontrol.io/packages/SublimeLinter-stylelint
* Visual Studio Code:
    * https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
    * https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint
* PHP Storm :
	* https://plugins.jetbrains.com/plugin/7494-eslint

## Troubleshooting
If you use Ubuntu, and you have problem with Node, please use `nvm install node` before Yarn commands.

### File watch in Docker on Windows does not work

If Webpack does not react to rebuilding files when running on Docker on Windows you should try passing these options to script:

```
$ yarn start --watch-aggregate-timeout 300 --watch-poll 500
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Netkata
The name Netkata comes from Japanese word "kata" (型) – movement forms practiced in martial arts to achieve perfection with a systematic iterative approach. This is how we work.
Let's get to know each other - [https://netkata.com](https://netkata.com)

## License
[MIT](https://choosealicense.com/licenses/mit/)
