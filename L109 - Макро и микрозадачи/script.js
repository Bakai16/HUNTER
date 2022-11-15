setTimeout(() => console.log('timeout'));

Promise.resolve()
  .then(() => console.log('promise'));

queueMicrotask(() => console.log("WOW"));  

Promise.resolve()
  .then(() => console.log('promise__2'));

console.log('Code');   ///1 корунот синхронный код
// Code
// promise
// WOW
// promise__2
// timeout


// () => {} макро 
// microtasks: then/catch/finally/await
// render
// () => {}
// () => {} макроа
// microtasks: then/catch/finally/await
// render
// () => {}
