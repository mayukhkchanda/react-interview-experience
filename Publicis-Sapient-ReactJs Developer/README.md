# Pubilics Sapients

## Role - Sr. SDE(React.JS)

## Experience - 3years 5months

## Technical Round I - SELECTED ✅

## Round I - Framework Round(React JS)

### **React Questions**

1.  Server side vs Client side components
1.  Why use server side rendering and it's benifits and disadvantages?
    > `Answer: ` First time to interactivity is delayed in case of server rendered components. Also, server side components increase the operational costs of an architechture since they require server side resources and computations.
1.  How to lazy load components ? How does suspense know when the components are available ?
    > `Answer: ` React.lazy returns a promise and suspense internally subscribes to that promise.
1.  Can Suspense be used with invidual components ?
1.  What will happen when we use Suspense inside suspense and use case of it.
    > `Answer:` When we use suspense to lazy load a page and also to lazy load some individual components inside that page.
1.  Can react.lazy be used to load third party libraries ?
1.  useReducer hook
1.  useSelector hook. Consider the below use case and select the best implementation.
    - A SPA has an user profile page and a navbar bar component that renders only the user's name. Supposing you have a global state with the user object that has name property, which one of the below useSelector declarations will you use for the navbar component and why ?
      1. `const user = useSelector(state => state.user)`
      1. `const username = useSelector(state => state.user.name)`
         > `Answer:` The navbar component renders just the name of user thus it's better to  use the `2nd` declaration and thus when the other properties(like email or profile photo) of the user updates, the navbar component will not re-render as it only subscribes to the user's name property where as in case of the `1st` declaration the navbar would unnecessarily re-render when other properties of the user change.
1.  Context provider vs Redux. Use case of each one. which one is more favorable and Why ?

    > `Answer:` In my opinion, `Redux` would be favorable as invidual components can subscribe to the state changes whereas in case of `Context` when the context updates all the child components updates since context itself is a react component and when it wraps over the child components, it will re-render those child components too when context changes.

---

### **React optimization coding questions**

1. When the count state changes, the chart child component also renders. Why does this happen and how do we avoid that ?

```
    function App() {
        const [count, setCount] = useState(0);

        return (
            <div className="App">
                <p id="count>{count}</p>
                <button id="increment" onClick={() => setCount(prevCount => prevCount+1)}>+</button>
                <button id="decrement" onClick={() => setCount(prevCount => prevCount-1)}>-</button>
                <Chart />
            </div>
        );
    }

    function Chart() {
        console.log("rendering chart")
        return (
            <div id="Chart">
                Heavy Chart component
            </div>
        )
    }
```

> `Answer:` When the count state changes it re-renders the App component which in turn re-renders the child components too. Using React.memo to memoize the Chart child component so that the child re-renders only incase of any changes to props have occured.

2. Imagine now we have an array declaration and a callback handler being passed to the chart child component, the chart child component also renders when state changes even though we memoized the Chart component. Why does this happens & how do we avoid that ?

```
    function App() {
        const [count, setCount] = useState(0);

        let someArray = [];
        const cbFunc = () => {
            console.log("callback");
        }

        return (
            <div className="App">
                <p id="count>{count}</p>
                <button id="increment" onClick={() => setCount(prevCount => prevCount+1)}>+</button>
                <button id="decrement" onClick={() => setCount(prevCount => prevCount-1)}>-</button>
                <MemoChart someArray={someArray} cbFunc={cbFunc}/>
            </div>
        );
    }

    Const MemoChart = React.memo(Chart)

    function Chart({someArray, cbFunc}) {
        console.log("rendering chart")
        return (
            <div id="Chart">
                Heavy Chart component
            </div>
        )
    }
```

> `Answer` When state changes all the declaration inside the functional component are re-initialized. Thus creating a new array reference and function reference every time the state changes. Since React.memo uses Object.is comparision for non-primitives thus it sees that the props passed to the Chart component has changed and attempts to re-render the child component. To solve this, we can use the useMemo hook to memoize the array declaration and useCallback hook to memoize the function declaration.

3. In the code below, when the state changes the operation always is always logged as 'none'? Why and how to avoid it without using another state. Why does this happend & how do we avoid that ?

```
    function App() {
        const [count, setCount] = useState(0);

        let operation = 'none';
        const increment = () => {
            operation = "increment"
            setCount(prevCount => prevCount+1)
        }
        const decrement = () => {
            operation = "decrement"
            setCount(prevCount => prevCount-1)
        }

        console.log(operation)

        return (
            <div className="App">
                <p id="count>{count}</p>
                <button id="increment" onClick={increment}>+</button>
                <button id="decrement" onClick={decrement}>-</button>

            </div>
        );
    }
```

> When the state changes all the variable and function declaration are re-initialized which is why even though we are assigning the "increment" & "decrement" value to operation, it still get's re-initialized as 'none'. To solve this we can use the useRef hook and store the operation value in useRef's current property since useRef perserves it's value between re-renders.

---

### **React Coding question**

4.  Given an API https://pokeapi.co/api/v2/pokemon/ use it to fetch data and render the list. Fetch data using async-await inside useEffect(must create the async function inside the useEffect, since passing async function to the useEffect will give an warning). Use a loading state to show loading indicator while the data is being fetched.
    Follow up-
    1. Move the data fetching logic to a custom hook.
    1. create cards for the each of the items in the list and center the items inside the card vertically and horizontally.
       > Solution for this can be found in `framework-round-coding-question` folder
