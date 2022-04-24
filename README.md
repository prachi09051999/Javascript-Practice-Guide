# Javascript-Practice-Guide
Implementation of some data structures like Stacks, some methods like debounce and some Polyfills.
<h2>1. Implementaion of Stack in Javascript - </h2>
<h3><i><i>top(),pop(),push(),clear() methods and length property </i></i></h3>
<p>I have used ECMAScript 2015 Class syntax to implement the Stack, but you can also use function constructor for it. (Class is just Syntactic sugar for function contructor )</p>
<pre>
class Stack {<br>
/* creating a new array to implement the Stack and also assigning the value of length to 0 in constructor method */
  constructor(size) {
    this.store = [];
    this.length = 0;
  }
  top() {<br>
  /* If there is no element present in the array, show -1 as output */
    return this.store.at(-1) || -1;
  }
  pop() {<br>
    let t = this.store.at(-1);    
    /* Only in the case when there is an element present in the array that's going to be deleted, then decrease se the value of length property */
    if (t) this.length--;
    this.store.splice(-1);
    console.log(this.store);
    return t || -1;
  }
  push(val) {<br> 
  /* Increasing the value of length property by 1 after each push operation so that user can access the upated length value anytime */
    this.length++;
    this.store.push(val);
  }
  clear() {<br>
    /* clearing the whole array and resetting the length property to 0 */
    this.length = 0;
    this.store.splice(0);
  }
}

<br>
/* Example testcase */
const st = new Stack();
st.pop();
console.log("st top = ", st.top());
st.push(10);
st.push(30);
st.push(40);
console.log("st length = ", st.length);
st.clear();
console.log("st2 top = ", st.length);
</pre>
<h2>2. Promise Methods</h2>
<h3><i>Promise.all(), Promise.allSettled(), Promise.any(), Promise.race()</i></h3>
<pre>

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I'm the first promise in List");
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("I'm the second promise in List");
  }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("I'm the third promise in List");
  }, 500);
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I'm the forth promise in List");
  }, 700);
});

/* Returning first Promise to be returned (since it's taking just 0.5 second) that has been either fulfilled or rejected*/
Promise.all([promise1, promise2, promise3, promise4])
  .then((res) => console.log(`Promise.all() = ${res}`))
  .catch((err) => console.log(`Promise.all() error= ${err}`));

/* Returning status of each Promise, either they are fulfilled or rejected*/
Promise.allSettled([promise1, promise2, promise3, promise4])
  .then((res) =>
    console.log(`Promise.allSettled() = ${res.map((r) => r.status)}`)
  )
  .catch((err) => console.log(`Promise.allSettled() error = ${err}`));

/* Promise.allSettled() methods gives error in the case of non-Iterable data*/
Promise.allSettled(10)
  .then((res) =>
    console.log(`Promise.allSettled() = ${res.map((r) => r.status)}`)
  )
  .catch((err) => console.log(`Promise.allSettled() error = ${err}`));

/* First Promise to be returned (either rejected or fulfilled) */

Promise.race([promise1, promise2, promise3, promise4])
  .then((res) => console.log(`Promise.race() = ${res}`))
  .catch((err) => console.log(`Promise.race() error = ${err}`));

/* First fulfilled Promise to be returned */
Promise.any([promise1, promise2, promise3, promise4])
  .then((res) => console.log(`Promise.any() = ${res}`))
  .catch((err) => console.log(`Promise.any() error = ${err}`));

/* Promise.any() gives Aggragate error which is basically Containing more than 1 error (can fetch list of all error messages using .errors Property )*/
Promise.any([promise2, promise3])
  .then((res) => console.log(`Promise.any() = ${res}`))
  .catch((err) => console.log(`Promise.any() error = ${err.errors}`));

/* Promise.lastFulfilled */
// Promise.lastFulfilled = (promises) => {
//   const fulFilledPromises = [];
//   const rejectedPromises = [];
//   return new Promise((resolve, reject) => {
//     promises.forEach(async (p, i) => {
//       try {
//         const res = await p;
//         // res
//         //   .then((res) => {
//         //     console.log(`result=${res}`);
//         fulFilledPromises.push(res);
//         // })
//         // .catch((err) => {
//         //   rejectedPromises.push(err);
//         // });

//         if (i === promises.length - 1) {
//           if (fulFilledPromises.length > 0) {
//             resolve(fulFilledPromises);
//           } else {
//             reject(rejectedPromises);
//           }
//         }
//       } catch (err) {
//         rejectedPromises.push(err);
//         //reject(err);
//       }
//     });
//   });
// };
async function lastFulfilled(promises) {
  if (!promises.length) throw new RangeError("No last result from no promises");
  const results = [];
  await Promise.all(
    promises.map((p) =>
      p.then((v) => {
        results.push(v);
      })
    )
  );
  return results[results.length - 1];
}

lastFulfilled([promise1, promise3])
  .then((res) => console.log(`Promise.lastFulfilled() = ${res}`))
  .catch((err) => console.log(`Promise.lastFulfilled() error = ${err}`));
</pre>
