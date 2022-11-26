# copy-deep

[![](https://img.shields.io/github/license/Vinccool96/copy-deep)](./LICENSE)
[![npm (scoped with tag)](https://img.shields.io/npm/v/copy-deep/latest.svg?style=flat-square)](https://npmjs.com/package/copy-deep)
[![npm](https://img.shields.io/npm/dt/copy-deep.svg?style=flat-square)](https://npmjs.com/package/copy-deep)

## Setup

- Add `copy-deep` dependency using yarn or npm to your project

  With yarn:

  ```sh
  yarn add copy-deep
  ```

  With npm:
  ```sh
  npm install --save copy-deep
  ```

## Usage

You can either use the function as the default import or as a partial import

### default import

```ts
import copyDeep from "copy-deep"

const initial = {
  foo: "bar",
  toto: true,
  honestly: ["it", { just: "works" }],
  tata() {
    return !this.toto
  },
}

const notExtensible = Object.preventExtensions(initial)

const clone = copyDeep(notExtensible)
```

### Partial import

```ts
import { copyDeep } from "copy-deep"

const initial = {
  foo: "bar",
  toto: true,
  honestly: ["it", { just: "works" }],
  tata() {
    return !this.toto
  },
}

const notExtensible = Object.preventExtensions(initial)

const clone = copyDeep(notExtensible)
```
