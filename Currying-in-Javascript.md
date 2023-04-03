<h1>Currying</h1>
<h4>Currying is basically converting a function which takes multiple arguments into a sequence of functions with a single argument.</h4>
<h2>Examples -</h2>
Let's start with a very basic example of <b>Currying</b>.
<pre>
/*A function sum which takes 2 arguments */
const sum = (a,b) => a+b;
/* A sequence of 2 functions, each takes one argument */
const curriedSum = (a) => (b) => a+b;
</pre>

<p>Now let's make the number of arguments <i>infinite</i> for a normal function -</p>

<pre>
const findInfSum = (...args) => {
  let result = 0;
  args.forEach(arg =>result += arg);
  return result;
}
/* Output = 10 */
console.log(findInfSum(1,2,3,4));
</pre>


 <p>Let's try <b>Currying</b> here - </p>


<pre>
const curriedInfSum = (args1) => {
  let result = 0;
  result += args1;
  return function curry(args2){
    if(!args2) return result;
    result += args2
    return curry;
  }
}
/* Output = 10 */
console.log(curriedInfSum(1)(2)(3)(4)());
</pre>

<p>Let's also look into the code where each function can take multiple arguments and there can be infinite functions like this - </p>

<pre>
const curriedInfSumWithMultipleArgs = (...args1) => {
  let result = 0;
  args1.forEach(arg=>result+=arg);
  return function curry(...args2){
    if(!args2.length===0) return result;
    args2.forEach(arg => result+= arg);
    return curry;
  }
}
/* Output = 10 */
console.log(curriedInfSumWithMultipleArgs(1,2)(3,4)());
</pre>
