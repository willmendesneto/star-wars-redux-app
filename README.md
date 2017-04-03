# Star Wars Redux App

> A simple Star Wars application using Swapi API data

[![Build Status](https://travis-ci.org/willmendesneto/star-wars-redux-app.png?branch=master)](https://travis-ci.org/willmendesneto/star-wars-redux-app)
[![Build Windows Status](https://ci.appveyor.com/api/projects/status/github/willmendesneto/star-wars-redux-app?svg=true)](https://ci.appveyor.com/project/willmendesneto/star-wars-redux-app/branch/master)
[![Coverage Status](https://coveralls.io/repos/willmendesneto/star-wars-redux-app/badge.svg?branch=master)](https://coveralls.io/r/willmendesneto/star-wars-redux-app?branch=master)

Contains:

* ES6 - 7 Support with Babel
* Redux dev tools to help you keep track of the app's state
* Routing
* hot module replacement support so you can change modules or react components without having to reload the browser
* a webpack production config so you can build the app and make it ready for production
* Sass support, just import your styles wherever you need them
* eslint to keep your js readable
* Code coverage
* Unit Tests using MochaJS and Enzyme


## How to install

Make sure that you are using the NodeJS version is the same as `.nvmrc` file version. If you don't have this version please use a version manager such as `nvm` or `n` to manage your local nodejs versions.

Assuming that you are using `nvm`, please run the commands inside this folder:

```bash
$ nvm install $(cat .nvmrc); # install required nodejs version
$ npm install # or `yarn install`
```


## Run the app

```bash
$ npm start
```

Once running, if you want to hide the redux dev monitor: `CTRL+h`.

Yes, it takes a while to load the first time you open the app.


## Run the tests

```bash
$ npm test # run the tests
$ npm test -- -w # run the tests with watch enabled. For more details look for mocha
```


## Points to share

- SWAPI gives to the consumers/clients a discovery endpoint with all urls related to the API. So that, I integrated that in the application. One of the most benefits of this approach is avoid code decoupling between API and Client (in that case, Frontend) and avoid this decoupling in other layers such as build pipeline, for example.

- We have some reusable components for some tasks such as pagination, but since the main goal here is validate the code I prefer create a simplest component which deals with that.

- I'm using Stateless components in ReactJS to make them simple, reusable and performatic as well in some cases.

- Some SOLID and other concepts were applied in the code to avoid literals and code decoupling.

- I'm using Twitter Bootstrap in this application because the time. So that I can keep focusing in some points related to the application.

- Application Configuration is inside `app/helpers/config.js`, which is a wrapper that you can add configurations as much as required in the app. In this scenario I added some constants, but this data could came from an API, a file that should be loaded or any other approach.

- This code has these integrations:
  - Travis-CI: Testing the code in OSX and Linux Operational systems. So that we can make sure that we're delivering a cross platform application;
  - AppVeyor: Testing the code in Windows Operational system. So that we can make sure that we're delivering a cross platform application;
  - Coveralls: Storing code coverage information and generating a badge with percentage;


## Points to improve

- Even with no order in the table items for star wars characters, add them is something really straightforward in that case, since we have a single point which handles that concept inside the app.

- There's no end-to-end and/or integration tests in this repository. By the way, add this test is not that hard and based in the current structure could be added easily in a structure like:

```
...
test
  unit
  e2e
    ...
    specs
    ...
...
```

So that we can avoid some possible issues in other environments (like production, for example) before release.

- Some files, such as action HTTP requests, are not tested. Unfortunately because the time I won't able to do all tests, so I covered some points related to the main project implementation and since API contracts shouldn't change often I'm assuming the current response and no down-time in API response. Another point is that I didn't cover "unhappy paths" like:
  - API timeout;
  - API is down;
  - etc;
Assuming that, I'm covering the expected behaviours after the response, reducer and components integration.
