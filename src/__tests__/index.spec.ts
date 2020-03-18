import debounce from '../index';

const continuesCall = (callback: () => void, wait: number) => setInterval(callback, wait);

const waiteFor = (wait: number) =>
  new Promise((resolve: () => void) => {
    setTimeout(() => {
      resolve();
    }, wait);
  });

const debouncedFunction = jest.fn(() => true);

let handler = setTimeout(() => void 0);

class MyClass {
  @debounce(100)
  debouncedFunction() {
    debouncedFunction();
  }
}

it('should have been called for once', done => {
  const myClass = new MyClass();
  handler = continuesCall(myClass.debouncedFunction, 10);
  waiteFor(1500).then(() => {
    clearInterval(handler);
  });
  waiteFor(2000).then(() => {
    expect(debouncedFunction).toHaveBeenCalledTimes(1);
    done();
  });
});
