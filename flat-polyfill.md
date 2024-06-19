<h2>Basic Recursive Approach for custom Array.prototype.flat method - </h2>
<pre>
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  const ans = [];
  function flattening(arr1,depth){
    arr1.forEach(item => {
      if(typeof item === 'object' &&  depth > 0){
        flattening(item,depth-1);
      }
      else ans.push(item);
    })
  }
  flattening(arr,depth);
  return ans;
}

const arr = [1, [2], [3, [4]]];

console.log(flat(arr))
// [1, 2, 3, [4]]

console.log(flat(arr, 1))
// [1, 2, 3, [4]]

console.log(flat(arr, 2))
// [1, 2, 3, 4]

</pre>
