This is the smallest reproduction case of [entry-loader](https://github.com/eoin/entry-loader) not working with [webpack code splitting](https://webpack.js.org/guides/code-splitting/).

### Setup:

Using yarn:

```sh
yarn
yarn start
```

Using npm:

```sh
npm install
npm start
```

### Issue

When you start a webserver navigate to [http://localhost:9001](http://localhost:9001) and open a console.
The main entry point is `app/a.js` and dynamic imports works fine inside of it.
But `app/a.js` loads `app/b.js` via `entry-loader` and all dynamic imports inside of `app/b.js` would throw error:

```js
bootstrap:19 Uncaught (in promise) TypeError: Cannot read property 'call' of undefined
    at __webpack_require__ (bootstrap:19)
  __webpack_require__ @ bootstrap:19
  Promise.catch (async)
  ./node_modules/babel-loader/lib/index.js!./app/b.js @ b.js:4
  __webpack_require__ @ bootstrap:19
  (anonymous) @ bootstrap:90
  (anonymous) @ bootstrap:90
```

