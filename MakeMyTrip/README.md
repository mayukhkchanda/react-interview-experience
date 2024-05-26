# MakeMyTrip

## Role - Senrio SWE - UI

## Experience - 3years 5months

## Technical Round I - SELECTED ✅

## Technical Round II - REJECTED ❌

## Round I - Vanila JS - 1 Hour

1.  Event loop
1.  Micro-task/callback queues
1.  Promises
1.  let vs var, scopes etc

1.  Code a Compose or Pipe function

    > https://bigfrontend.dev/problem/what-is-composition-create-a-pipe

        ```
        function compose(...funcs) {

            return function (arg) {
                let result = arg;
                for (let i =0; i<funcs.length; i++) {
                result = funcs[i].call(this, result);
                }
                return result;
            }
        }

        const square = (x) => (x*x);
        const addOne = (x) => (x+1);
        const minusOne = (x) => (x-1)

        console.log(compose(square, addOne, minusOne,square)(5))
        ```

1.  Memo function

    > https://bigfrontend.dev/problem/implement-general-memoization-function

    ```
    function memo(func) {
        const map = new Map();

        return function (arg) {

            if (map.get(arg)) {
            console.log("from cache");
            return map.get(arg);
            }
            console.log("new value");
            const result = func.call(this, arg)
            map.set(arg, result)
            return result;
        }
    }

    const memoSquare = memo(square);
    console.log(memoSquare(5));
    console.log(memoSquare(5)); // should log "from cache"
    ```

1.  Max sum of 2 numbers in an arrays

    ```
    function maxSum (arr) {
        let m1 = 0, m2 = 0;

        for (let i = 0; i<arr.length; i++) {
            if (arr[i] > m1) {
                m2 = m1;
                m1 = arr[i];
            }
            else if (arr[i] > m2) {
                m2 = arr[i];
            }
        }
        return (m1 + m2);
    }


    const x = [12,34,10,-105,6,40,85,36,2,45]

    console.log(maxSum(x))
    ```

1.  Promise.all polyfill

    > https://bigfrontend.dev/problem/implement-Promise-all

    ```
    function myAll(promises) {
        return new Promise((res, rej) => {
            const result = [];
            let i = 0;

            function cb(value, index) {
                result[index] = value;
                i++;
                if (i === promises.length) {
                    res(result);
                }
            }

            promises.forEach((promise, index) => {
                promise
                    .then((v) => cb(v, index))
                    .catch(err => rej(err));
            })
        })
    }

    myAll([p1, p2, p3]).then().catch()
    ```

1.  Output of the following script

    ```
    console.log(username1) // undefined
    var username1 = "Rohit"

    console.log(username2) // referrence error. script dies at this point.
    let username2 = "Amit"

    console.log(username3)
    const username3 = "Sumit"
    ```

1.  Output of the below function:

    ```
    function x(){
        for(var i=1; i<=5; i++){
            setTimeout(()=>{
                console.log(i)
            },i*1000)
        }

        console.log("Hello world")
    }
    x(); // logs '6' six times, since var is function scoped
    ```

    - Follow up question was to fix the above code to log `1, 2, 3, 4, 5 in 1 second intervals`. There are many way to fix this code

      - Using `let` declarations instead to `var`for the iterator `i`.

        ```
        function x(){
            for(let i=1; i<=5; i++){
                cb(i);
            }
            console.log("Hello world")
        }

        x()
        ```

      - Using another function to create a closure with the argument

        ```
        function x(){
            function cb (x) {
                setTimeout(() => console.log(x), x*1000)
            }

            for(var i=1; i<=5; i++){
                cb(i);
            }
            console.log("Hello world")
        }

        x()
        ```

1.  Create a counter app in react with `stop`, `start`, `reset` & `resume` functionality. Once started the count should be incremented by `1` each second. On `reset` the counter should stop and count should be reset to `0`.

        ```
        import { useState, useRef } from 'react';

        function App() {
            const [count, setCount] = useState(0);
            const id = useRef();

            const handleStart = () => {
                id.current = setInterval(() => {
                    setCount((prevCount) => prevCount + 1);
                }, 1000);
            };
            const handleStop = () => {
                clearInterval(id.current);
            };
            const handleResume = () => {
                handleStart();
            };
            const handleReset = () => {
                handleStop();
                setCount(0);
            }
            return (
            <div>
                Counter: {count}
                <button onClick={handleStart}>start</button>
                <button onClick={handleStop}>stop</button>
                <button onClick={handleResume}>resume</button>
                <button onClick={handleReset}>reset</button>
            </div>
            );
        }

        export default App;
        ```
