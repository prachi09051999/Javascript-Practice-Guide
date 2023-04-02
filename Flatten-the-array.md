<h1>Flat a n-level nested Array in Javascript</h1>
<p>You'll be provided a nested array like - <b>[1,[2[3,4,[5]]]]</b>. You need to write a function which flatten this array and return an output array like this - <b>[1,2,3,4,5]</b></p>
<em>Please refer <a href="https://codesandbox.io/s/flalten-the-array-411s6g?file=/src/index.js:0-586" target="_blank">this</a> for live Sandbox demo.</em>
<br/><br/><ul><li><b>Implementation - </b></li>
  </br>
<pre>
const arr = [[1, 2], [3, 4, [5, 6]], 7, [8, 9, [10, 11, [12]]]];
console.log("original array = ", arr);
const flattenArray = (arr) => {
  const result = [];
  function flatten(arr) {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        flatten(element);
      } else result.push(element);
    });
    return result;
  }
  return flatten(arr);
};

console.log("flattened array = ", flattenArray(arr));</pre>
