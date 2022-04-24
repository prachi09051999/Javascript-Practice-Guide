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
