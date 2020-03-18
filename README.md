# @jsdecorators/debounce

>Encapsulate `lodash.debounce` to a decorator.
For further details please check [lodash/debounce.js](https://github.com/lodash/lodash/blob/master/debounce.js)

## install
```sh

~$ yarn add @jsdecorators/debounce

```

or

```sh

~$ npm i @jsdecorators/debounce

```

## how to use

```ts
import debounce from '@jsdecorators/debounce';

class MyClass {

  @debounce(100)
  onScroll() {
    console.log('onScroll is called!');
  }

}

```

