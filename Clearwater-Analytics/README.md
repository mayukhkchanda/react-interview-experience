# Clearwater Analytics

## Role - SWE - UI

## Experience - 3years 5months

## Technical Round I & II & III - SELECTED ✅

## Round I - Javascript + React.JS - 1 Hour

1.  HackerRank coding challenge. `Product Page`

    - > To Design a `Home` Page & `Cart` Page using `React-Router-Dom`. `Home` page should display products with `name`, `description` & `price` along with `Add To Cart` button that adds the product to cart.
    - > When product is added to cart, the `Cart` page must render those products with a `Remove from Cart` button alongside and show the total of the cart at the bottom.
    - > User can added multiple quantities of each product but each product must be added once and the quatity must be updated. User could remove a product from the `Cart` page and the total must be updated.

    - This was a Hackerrank platform based test where the skeleton was already implement and the business functionality was required to be added.

    - I used `useReducer` for state management and `useMemo` with `Array.prototype.reduce` method to calculate the total of the cart in the `Cart` page.

1.  Follow up questions:

    - Questions on `Redux`, `State`, `Context` APIs and what were the pros and cons of each method.
    - `useMemo`polyfill with support for multiple arguments. For instance, given an `addNumbers(...args)` function, need to write a `memo` function that does the same as `useMemo`.

      > https://bigfrontend.dev/problem/implement-general-memoization-function

    - Implement `Array.prototype.myReduce` method as a polyfill for `Array.prototype.reduce`. Had to use it in the cart component to calculate the total instead of `Array.prototype.reduce`.
      > https://bigfrontend.dev/problem/implement-Array-prototype-reduce

## Round II - JavaScript Question & Typescript + React.JS coding - 1 Hour

1. Diff b/w `var`, `let` & `const`.
1. Lexical environments and temporal dead zone.
1. Browser, Document and CSS Object Models.
1. Event loop, call stack, async queues like Micro-Task & Macro-Task queues
1. Diff b/w Arrow vs Normal functions.
1. Output based question based on Arrow vs Normal function:
   ```
   var name = "window"
   let obj = {
       name: "object",
       print1: function() {
           console.log(this.name) // "object"
       },
       print2: () => {
           console.log(this.name) // "window", since arrow functions donot have their 'this'
       }
   }
   ```
1. HackerRank coding challenge. `Note Editor`
   - > Developed a note editor with add note functionality. Display a `NoteForm` component to add a note that has a `title`, `content` along with `Add Note` button that adds the note. The button is disabled if `title` or `content` is empty.
   - > `NoteItem` component must be used for rendering the note and has a `Update` & `Delete` button that updates or deletes the note accordingly. The state also should be updated.
   - > To update a note, the `NoteForm` component must be used by passing an additional `noteToEdit` props from the `NoteItem`.
   - The skeleton code for this was already written with `useState` for state management and `types` were already specified.
   - Had to explain the data flow from incase of adding a new note and when editing a note.

## Round III - Techno-Managerial - React.JS Custom Hooks - 45 mins

1. This was a short techno-managerial round with a React.Js coding question with a few follow up question. Started with a short introduction with the current assignment, roles & responsibilities. Followed by a coding question and follow up questions.

1. Implement a `usePrevious` custom hook that can track the previous value.

   - Initially, was asked to implement for a simple counter functionality where if we increment the count, then the `usePrevious` hook should return us the current count along with previous count and an increment function that increments the count.
     ```
     import { useRef, useState } from 'react';
     const usePrevious = (init) => {
         const [value, setValue] = useState(init);
         const prevValRef = useRef(init);
         const increment = () => {
             prevValRef.current = value;
             setValue((prev) => (prev+1));
         };
         return [value, prevValRef.current, increment];
     };
     ```
   - Follow question was to generalise it for any value be it string or numbers and use it in an input component to track current & previous value. The hook must be self-contained meaning it has both the current and previous values.

     ```
     import { useRef, useState } from 'react';

     const usePrevious = (init) => {
         const [value, setValue] = useState(init);
         const prevValRef = useRef(init);

         const change = (updateValue) => {
             prevValRef.current = value;
             setValue(updateValue);
         };

         return [value, prevValRef.current, change];
     };

     function App() {
         const [value, prevValue, change] = usePrevious('');
         const handleChange = (e) => change(e.target.value);

         return (
             <div>
                 <input type="text" value={value} onChange={handleChange} />
                 <p>Current value: {value}</p>
                 <p>Previous Value: {prevValue}</p>
             </div>
         );
     }

     export default App;

     ```

1. Follow up questions on Jenkins pipelines, CI/CD and deployment and if any prior expirence with these.
1. Additionally what to look for in a code review and if any previous expirence with code reviewing.
