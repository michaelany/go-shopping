<div align="center">
    <img a width="68" src="public/logo.svg" alt="GO Shopping" />
</div>

<h1 align="center">GO Shopping</h1>

A simple shopping website which uses the Fake Store API (see https://fakestoreapi.com/docs)

## ⚙️

```
yarn
```

Installs all project dependencies.

---

## 🏁

```
yarn dev
```

Runs the app in the development mode. Opens [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 📦

```
yarn build
```

Builds the app for production to the `dist` folder.

---

## ☑️

```
yarn lint
```

Runs linter to find errors and warnings in the code.

---

## 👀

```
yarn preview
```

Previews locally production build. Opens [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
