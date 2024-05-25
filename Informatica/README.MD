# Informatica

## Role - SWE - UI

## Experience - 3years 5months

## Technical Round I & II & III - SELECTED ✅

## Round I - Javascript + React.JS

1. Question regarding - hooks, useRef, useMemo, useCallback

1. Flatten nested array with no buil-in methods.
   https://bigfrontend.dev/problem/implement-Array-prototype.flat

1. Reverse words in a sentence, can use string methods.

   > Eg: _Inp_ - "Welcome to interview" | _Out_ - "emocleW ot weivretni"

1. Form component with email & name using react.

   > Follow up question regarding prevent default and useState

1. Css specificity & basic HTML related questions

## Rount II - Javascript Round

1. Flatten nested obj.

   ```
   Input:
   let person = {
       fistName: 'John',
       address:  {
           street: 'Abc Street',
           city: 'Xyx City',
           landmark:  {
               sector: '100'
           },
           phone: {
               country: '91',
               number: '12345'
           }
       }
   }

   Output:
   {
       person_fistName: 'John',
       person_address_street: 'Abc Street',
       person_address_landmark_sector: '100'
       ...
   }
   ```

   ```
   Code:

   function flattenObj(obj) {
       const newObj = {};

       function wrapper(name, obj){
           if (obj === null) return obj;

           for (let key in obj) {
               if (typeof obj[key] === 'object') {
                   wrapper(name+"_"+key, obj[key]);
               } else {
                   newObj[name+"_"+key] = obj[key];
               }
           }

           return newObj;
       }
       return wrapper("person", obj)
   }

   ```

1. Auto-retry async call `n` times. https://bigfrontend.dev/problem/retry-promise-on-rejection.

   ```
   Code:

       function fetchWithAutoRetry(fetcher, maxCount, ...args) {
           return new Promise((res, rej) => {

           async function wrapper(count) {

               try {
               const result = await fetcher.call(this, args);
               res(result);
               } catch(err) {
               (count > 0) ? (wrapper(--count)) : rej(err);
               }
           }

           wrapper(maxCount);
           })
       }

       fetchWithAutoRetry(() => Promise.reject("error"), 3)
       .then((val) => (console.log(val)))
       .catch((err) => (console.log(err)))
   ```

## Round III - Framework/Discussion Round

- This was a pair programming round. The interviewer was joining from the US and was the Principle Software Architect for the design systems used _Informatica_.
- The main idea was to judge the approach to a particular problem statement rather than the end solution. It was neccessary to discuss the approach we were taking rather than the end solution.
- The problem statement was simple, to fetch data from a [Random User API](https://randomuser.me/api/) and show the result.
  > Follow up question:
  - Using custom hook to fetch the data using async-await functionality
  - Initiall, a single user should be display with user name and profile rendered side-by-side.
  - Add a `show more` button to display a new user on click.
  - Render the user details in a table with username, profile image & gender as it's headers. New users added must be displayed as a new table row.
  - What things to keep in mind before we submit for a code review ? Basically variable & function naming conventions, coding principles such as DRY and so on.

## Development Managerial Round

- This was a techno-manegerial round with the Software Development Manager of the team for which they were hiring.
- It was held to judge the internal team fitment and working style. Nothing too serious.
- Questions were mostly related to the below points:
  - introducion, current assignment, team size, roles & responsibilities,
  - strengths & weakness, work pattern, handling conflicts of interest & feedback, criticism, stress and so on,
  - Questions about the things written in resume,
  - when stuck you, what do you do.

## Hiring Manager/Behaviour round

- This interview was with the hiring manager and question were scenario based behavioral questions. A few I have discussed below.
  - What do you do when you miss deadlines ?
  - How do you handle/give feedback ?
  - How often do you interact with clients ?
  - How do you understand client needs ?
  - How do you handle stress ?
  - How do you handle failure/mistakes ?
