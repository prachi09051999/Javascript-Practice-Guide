<h1>Debounce and Throttle in Javascript</h1>
<h4><i>There are 3 Input fields for First Name, Last Name and Email (Debounce implemented for First Name,Simple Throttle for Email and Throttle with the edge case of running for the last time too for Last Name)</i></h4>
<ol><li><p>Taking output and input field Elements - </p>
  <pre>const outputDebounceFirstName = document.querySelector(
  ".output-debounce-first-name"
);
const outputDebounceLastName = document.querySelector(
  ".output-debounce-last-name"
);
const outputDebounceEmail = document.querySelector(".output-debounce-email");

const nameFirstInput = document.getElementById("first-name");
const nameLastInput = document.getElementById("last-name");
const nameEmail = document.getElementById("email");</pre></li>
  <li><p>The Implementation of Common Debounce Function which is reusable - </p><pre>
/* Delaying for 3 seconds */
function debounce(func, delay) {
  let timer;
  return function () {
    const context = this;
    const arg = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, arg);
    }, delay);
  };
}</pre></li><li><p>Implementation of Throttle Function with a limit - </p><pre>

/* Throttle for 3 seconds */
function throttle(func, limit) {
  let inLimit;
  return function () {
    const context = this;
    const arg = arguments;
    if (!inLimit) {
      func.apply(context, arg);
      inLimit = true;
      setTimeout(() => (inLimit = false), limit);
    }
  };
}</pre></li><li><p>Throttle Implementation with the edge case of running the function for last time after limit time exceeds - </p><pre>

/* Throttle with edge case of adding last values too */
function throttleWithEdgeCase(func, limit) {
  let lastTime, lastFunc;
  return function () {
    const context = this;
    const arg = arguments;
    if (!lastTime) {
      func.apply(context, arg);
      lastTime = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastTime >= limit) {
          func.apply(context, arg);
          lastTime = Date.now();
        }
      }, limit - (Date.now() - lastTime));
    }
  };
}
</pre></li><li><p>Adding the functions that need to be run after 3 seconds in case of debounce and within 3 seconds in case of Throttle - </p><pre>

nameFirstInput &&
  nameFirstInput.addEventListener(
    "keyup",
    debounce(function (e) {
      outputDebounceFirstName.innerHTML = e.target.value;
    }, 3000)
  );

nameEmail &&
  nameEmail.addEventListener(
    "keyup",
    throttle(function (e) {
      outputDebounceEmail.innerHTML = e.target.value;
    }, 3000)
  );

nameLastInput &&
  nameLastInput.addEventListener(
    "keyup",
    throttleWithEdgeCase(function (e) {
      outputDebounceLastName.innerHTML = e.target.value;
    }, 3000)
  );
  </pre></li>
