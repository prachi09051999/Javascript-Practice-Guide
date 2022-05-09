<h1>Promise Methods Polyfills - </h1><h3>Polyfills of Promise.all(), Promise.allSettled(), Promise.race() and Promise.any() methods </h3><h4><i>1. A function which will return a Fulfilled Promise in case you passed a delay lesser than 5 seconds, else reject it.</i></h4><pre>const promiseFunc = function (delay) {
  return new Promise((resolve, reject) => {
    if (delay < 5000)
      setTimeout(
        () =>
          resolve(`hey I got solved with a delay of ${delay / 1000} seconds`),
        delay
      );
    else {
      setTimeout(() => {
        reject(`hey I'm unsolved cuz delay was ${delay / 1000} seconds `);
      }, delay);
    }
  });
};
</pre>
<h4><i>2. Implemention of Polyfill for Promise.all method and it's comparison with built-in Promise.all method</i></h4>
<pre>
/* Promise.all */
Promise.all([promiseFunc(4000), promiseFunc(3000), promiseFunc(5000)])
  .then((res) => {
    console.log("input from built-in Promise.all method", res);
  })
  .catch((err) => console.error("error from built-in Promise.all method", err));

Promise.myAll = (arg) => {
  let resolved = [];
  //let errored = [];
  let promiseCompleted = 0;
  return new Promise((resolve, reject) => {
    arg.forEach((singlePromise, i) => {
      singlePromise
        .then((res) => {
          resolved[i] = res;
          promiseCompleted++;
          if (promiseCompleted === arg.length) {
            resolve(resolved);
          }
        })
        .catch((err) => reject(err));
    });
    //resolve(resolved);
  });
};

Promise.myAll([promiseFunc(4000), promiseFunc(3000), promiseFunc(5000)])
  .then((res) => {
    console.log("input from polyfill Promise.all method", res);
  })
  .catch((err) =>
    console.error("error from  polyfill Promise.all method", err)
  );
</pre>
<h4><i>2. Implemention of Polyfill for Promise.allSettled method and it's comparison with built-in Promise.allSettled method</i></h4>
<pre>
/* Promise.allSettled */
Promise.allSettled([promiseFunc(4000), promiseFunc(3000), promiseFunc(5000)])
  .then((res) => {
    res.forEach((r) => {
      console.log("input from built-in Promise.allSettled method", r);
    });
  })
  .catch((err) =>
    console.error("error from built-in Promise.allSettled method", err)
  );

Promise.myAllSettled = (arg) => {
  let resolved = [];
  //let errored = [];
  let promiseCompleted = 0;
  return new Promise((resolve, reject) => {
    arg.forEach((singlePromise, i) => {
      singlePromise
        .then((res) => {
          resolved[i] = { status: "fulfilled", value: res };
          promiseCompleted++;
          if (promiseCompleted === arg.length) {
            resolve(resolved);
          }
        })
        .catch((err) => {
          promiseCompleted++;
          resolved[i] = { status: "rejected", reason: err };
          if (promiseCompleted === arg.length) {
            resolve(resolved);
          }
        });
    });
    //resolve(resolved);
  });
};

Promise.myAllSettled([promiseFunc(4000), promiseFunc(3000), promiseFunc(5000)])
  .then((res) => {
    res.forEach((r) => {
      console.log("input from polyfills Promise.allSettled method", r);
    });
  })
  .catch((err) =>
    console.error("error from  polyfill Promise.allSettled method", err)
  );
</pre>
<h4><i>2. Implemention of Polyfill for Promise.race method and it's comparison with built-in Promise.race method</i></h4>
<pre>
/* Promise.race method */
Promise.race([
  promiseFunc(4000),
  promiseFunc(3000),
  promiseFunc(5000),
  new Promise((reject) => {
    setTimeout(() => {
      reject("custom error");
    }, 1000);
  })
])
  .then((res) => {
    console.log("input from built-in Promise.race method", res);
  })
  .catch((err) =>
    console.error("error from built-in Promise.race method", err)
  );

Promise.myRace = (arg) => {
  return new Promise((resolve, reject) => {
    arg.forEach((singlePromise, i) => {
      singlePromise
        .then((res) => {
          resolve(singlePromise);
        })
        .catch((err) => {
          resolve(err);
        });
    });
  });
};

Promise.myRace([
  promiseFunc(4000),
  promiseFunc(3000),
  promiseFunc(5000),
  new Promise((reject) => {
    setTimeout(() => {
      reject("custom error");
    }, 1000);
  })
])
  .then((res) => {
    console.log("input from polyfills Promise.race method", res);
  })
  .catch((err) =>
    console.error("error from  polyfill Promise.race method", err)
  );
</pre>
<h4><i>2. Implemention of Polyfill for Promise.any method and it's comparison with built-in Promise.any method</i></h4>
<pre>
/* Promise.any Method */
Promise.any([
  promiseFunc(4000),
  promiseFunc(3000),
  promiseFunc(5000),
  new Promise((reject) => {
    setTimeout(() => {
      reject("rejected in Promise.any");
    }, 3000);
  })
])
  .then((res) => {
    console.log("Result from built-in Promise.any method", res);
  })
  .catch((err) => {
    console.log("Error from built-in Promise.any method", err);
  });

Promise.myAny = function (arg) {
  return new Promise((resolve, reject) => {
    arg.forEach(async (singlePromise) => {
      try {
        const res = await singlePromise;
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  });
};

Promise.myAny([
  promiseFunc(4000),
  promiseFunc(3000),
  promiseFunc(5000),
  new Promise((reject) => {
    setTimeout(() => {
      reject("rejected in Promise.any");
    }, 3000);
  })
])
  .then((res) => {
    console.log("Result from polyfill Promise.any method", res);
  })
  .catch((err) => {
    console.log("Error from polyfill Promise.any method", err);
  });
</pre>
