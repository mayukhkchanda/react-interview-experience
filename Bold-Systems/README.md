# BOLD SYSTEMS

## Role - Sr. SDE(React.JS)

## Experience - 3years 5months

## Technical - SELECTED ✅

## Round 1

- **JS/React.Js**

  1. Clouser
  1. Hoisting
  1. useMemo
  1. useCallbacks
  1. useReducer
  1. useRef
  1. Lazy loading & Suspense
  1. How can we pass data from child to parent without callbacks? - Using `useImperativeHandle` hook.
     > https://stackoverflow.com/a/72353009
  1. Context vs Redux. Why would you chose one over the other ?
  1. Object comparision in JS. How can we quickly compare 2 objects in JS having nested object? - Using `JSON.stringify`
  1. Server side rendering with it's pros and cons.
  1. How do we reduce bundle size in react.

- **Output based**

  1. Hoisting based

  ```
      var a = 10
      function b() {
          a = 1
          function a() {}
      }
      b()
      console.log(a)
  ```

  `output: 10`. Functions are also values in JS and as such would be hoisted inside the function `b` which would then be overwritten by the initialization `a = 1` and the outer variable would retain it's intial value.

  2. Closure based

  ```
      function x() {
          let a = 1;
          function increment() {
              a++;
          }
          let msg = `count = ${a}`;
          function log() {
              return msg;
          }
          return [increment, log];
      }

      const [increment, log] = x();

      increment();
      increment();
      increment();
      log();
  ```

  `output: "count = 1"`. The variable `msg` is intialized only once at the time of declaration and since we are using string templating `msg` get initialized to value of `"count = 1"` and doesnot change even if the `increment` function is called.

  3. Hoisting based

  ```
      function a() {
          console.log('name');
      }
      a() (I)
      function a(name) {
          console.log('name: '+ name);
      }
      a("abc") (II)
  ```

  `output: I -> 'name: undefined', II -> 'name: abc'`. This is because functions are considered as values in JS and as such the later function defination of `a` will overried the former defination which would lead to both the function invocations `I` & `II` calling the same defination.

- **Coding Question/Vanila JS**
  - Given 2 sorted arrays merge the arrays. The arrays might contain duplicate elements. Need to solve without library functions. [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/description/). Can be done using 2 pointer approach.
