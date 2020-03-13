# @jsdecorators/debounce

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

