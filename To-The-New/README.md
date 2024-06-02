# To The New

## Role - Senior Frontend Engineer

## Experience - 3years 5months

## Technical Round I

## Round I - HTML/CSS/JS/React Round - 1 hour

- **HTML**

  1. Semantic tags
  1. `DOCTYPE` & `meta` tags
  1. Create a `form` with semantic tags and add validation using JS to prevent user from entering some pre-defined words

     ```
     <form id="form">
         <label id="username-label" for="username">Username</label>
         <input type="text" id="username" name="username">
         <br>
         <label id="password-label" for="password">Password</label>
         <input type="text" id="password" name="password">
         <br>
         <label for="gender-male">Male</label>
         <input type="radio" id="gender-male" name="gender" value="male" >
         <br>
         <label for="gender-female">female</label>
         <input type="radio" id="gender-female" name="gender" value="female" >
         <br>
         <button type="submit">Submit</button>
     </form>
     <script>
         const invalidUsernames = ['abc','xyz'];

         document.getElementById("username")
             .addEventListener("change", (event) => {
             let value = event.target.value;
             if (invalidUsernames.includes(value)) {
                 event.target.value = "";
             }
         });
     </script>
     ```

  1. `img`'s `src` & `srcset` tag difference.
  1. box-model & box-sizing in HTML
  1. How to specify the fallback option in an image tag?

- **CSS**

  1. How to style the middle element in a list using css only ?
     ```
     <ul class="list">
         <li>Item 1</li>
         <li>Item 2</li>
         ...
         <li>Item n</li>
     </ul>
     ```
     - probably using nth-child
  1. `block` & `inline` elememts. Can we nest a `block` level element inside of an `inline` element ?

- **JS**

  1. Flatten object. Key might include arrays or nested objects.
  1. Promise polyfill.
  1. Output & explain:

     1. `arguments` obj

        ```
        function abc(name1, name2){
            name1="name1";
            name2="namw2";
            console.log(arguments[0], arguments[1])
        }

        abc("abc", "def")
        ```

        - stackover flow explanation: https://stackoverflow.com/a/54323399

     1. Object keys
        ```
        const obj = {
            1: "Lokesh",
            "1": "Lokesh1",
            [1]:"Lokesh2"
        }
        console.log(obj[1])
        ```
        - Object keys can be only `strings` or `symbols` everything else is internally converted to either of these 2 things.

- **React**

  1. Create a progress bar app with the following properties in react.

     - > Render an `input` box with only number support that would specify the steps in which the `progress` bar value should increment.
     - > For example, if steps = 20, then the `progress` bar value increase by 20 in each step like 0 -> 20 -> 40 -> 80 -> 100.
     - > Render a `progress` bar that finishes in 1 second and in each interval increment by `steps` entered in the input.
     - > On complete of the `progress` bar a `completed` alert should be displayed.

       ```
       import { useEffect, useRef, useState } from 'react';

       function App() {
           const [steps, setSteps] = useState(0);
           const [value, setValue] = useState(0);
           const timerId = useRef<number>();
           const max = 100;

           const handleStepsChange = (event) => {
               setSteps(Number(event.target.value) < 0 ? 0 : Number(event.target.value));
           };

            useEffect(() => {
                if (!steps) return;

                let duration = 1000;
                let increments = Math.floor(max / steps);
                let intervals = Math.floor(duration / increments);

                timerId.current = setInterval(() => {
                    setValue((prevValue) => prevValue + steps);
                }, intervals);

                return () => {
                    clearInterval(timerId.current);
                };

            }, [steps]);

            useEffect(() => {
                if (value > 100) {
                    clearInterval(timerId.current);
                    alert('completed');
                    setValue(0);
                }
            }, [value]);

            return (
                <div>
                    <label htmlFor="steps">
                    <input
                        type="number"
                        id="steps"
                        value={steps}
                        onChange={handleStepsChange}
                    />
                    </label>
                    <progress value={value} max={100}></progress>
                </div>
                );
            }
            export default App;
       ```
