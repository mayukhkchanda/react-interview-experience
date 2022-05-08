# Amdocs Interview experience

## Role - React JS Developer | Designation - Software Developer

## Experience - 1yr 5months

## **Selected & Offered & Joined**

---

## Online Assessment -> Techincal Interview

---

- ## General Questions

  1. Introduce yourself.
  1. Role/Responsibilities in current organisation?
  1. Total years of experience and relevant experience ?
  1. Why do you want to switch ?
  1. Techonologies currently being used for Front-end stack(eg- Webpack, Babel etc)

- ## Technical Questions

  - ### JavaScript Questions

    1. What are Closures ?
    1. call() vs apply() vs bind() method?
    1. What is mean by hoisting?
    1. Difference between _var_, _let_ & _const_ ?
    1. \*Arrow Functions _vs_ Normal functions ? _Follow Up:_ While calling an API which one would you use for extracting the response?
    1. Different ways of creating **Objects** in Javascript.

  - ### JavaScript Coding questions

    1.  What will be the output of the following? Give reason for the same. How will you modify the code to sort the array in ascending/descending order?

            arr = [1,4,11,2,8,9,61];
            arr.sort();

    1.  a. Given an array of objects with name and type attributes, filter and get the names of the objects of a particular type.

            Input:
              fruits = [
                {name: 'banana', type: 'fruit'},
                {name: 'onions', type: 'vegetable'},
                {name: 'orange', type: 'fruit'},
                {name: 'tomato', type: 'vegetable'},
                {name: 'mango', type: 'fruit'}, {
                  name: 'carrots', type: 'vegetable'} ];
              type = 'fruit';
            Output:
              ['banana', 'orange', 'mango']

        Note: only extract the name of fruits and not the whole object. Output will be an array of strings.

        b. Sort the above output of names of fruits in ascending(or can also descending).

            Output:
              ['banana','mango', 'orange']

    1.  Given an array containing repeated words print frequency of each word:

            Input:
            fruits = ['apple', 'mango', 'banana', 'mango', 'orange', 'mango', 'banana']
            output:
            { 'banana': 2, 'mango' : 2, 'apple': 1, 'orange':1 }

    1.  How does `setTimeout(callbackFunc, 0)` behave ? Explain.

  - ### React Questions

    1. React Lifecycle methods
    1. Hooks - UseEffect and UseState
    1. How do we set the state in Class components?
    1. Lifecycel methods in Class components. Hooks in function components.
    1. How do you fetch data using an API service and display the data in components?

  - ### React Coding/Design Question

    This was more of an open-ended question that focus on the approach you are taking to design a component. Often times the interviewer would ask to do a certain thing differently.

    - Scenario

      You are given an API service `getEmployeeDetails()` that calls an API and fetches employee data for all employees.

      Design 2 React components `EmployeeDetails` & `PersonData`. `EmployeeDetails` will display all the employees' records and `PersonData` will display only a single employees' details.

      You need to call the service and display all the employee details in `EmployeeDetails` component.

      The response contains the _name_, _age_, _salary_, _id_, _department_ etc of all the employees. The response might contain more feilds of the employee but _name_, _age_, _salary_, _id_, _department_, will always be there. For example:

            response = [
              {name:..., age:..., id:..., department:..., ...},
              {...},
              {...},
              {...} ... ]

    - Problem Statement:

      Display all the employee details in `EmployeeDetails` component using `PersonData` component. The `PersonData` component should display **name**, **age** and **department** of an employee.

      The `PersonData` contains a comment `input` box and `submit` button in addition to the **name**, **age** and **department** of an employee.

      An user can type a comment in the comment input box and on click of submit button the `comment` and `id`(of the employee reveiving the comment) should be passed to the comment to the `EmployeeDetails` component.

      After `EmployeeDetails` component receives the `comment` and `id`, add the `comment` to the employee with the `id` that is passed and then display the `comment` inside the respective employee's view.

      Note: No need to write the UI for `EmployeeDetails`, but `PersonData` UI should be there. No need to write `CSS` only `HTML` wil do.

    - My Approach

      I used functional component to design the componets.

      - Created an `EmployeeDetails` functional component and used `useEffect` to call the `getEmployeeDetails()` service. After getting the response, updated the state with the fetched response.

        Mapped through the responses and displayed the employee details of a particular employee.

        When ever an user would comment, I would pass the `comment` and `id` of the employee who received the comment to `EmployeeDetails` component and add it to the record of the empolyee with that `id`.

        **Note** I only considered that there would be a single comment, but code can be easily modified to use an array of comments instead. And then map through all of those comments.

              const EmployeeDetails = () => {
                  const [empDetails, setEmpDetails] = useState([]);

                  useEffect(()=>{
                    getEmployeeDetails()
                      .then(response => setEmpDetails(response.data))
                  },[])

                  handleComment = (comment, empId) => {
                    const newEmpDetails = empDetails.map( empData => {

                        // if the id matches the empId, then I'm adding this comment to the employees data
                        if( empData.Id === empId ){
                          empData['comment'] = comment;
                        }

                        return empData;
                    })

                    setEmpDetails(newEmpDetails);
                  }

                  return (
                    <div>
                      Employee Details

                      { empDetails.length > 0  && empDetails.map( (empData) => {
                          return (
                            <PersonData empData={empData} handleComment={handleComment} />
                        );
                      })
                      }
                    </div>

                  )

              }

    - The `PersonData` component would show **name**, **age** and **department** of an employee that is passed down to it using props from `EmployeeDetails`(also pass id of the employee but no need to display it).

      For the comment input box & submit button, created a form component and used `useState` to make the input a controlled component.

      For, handling on submit, created a `handleSubmit` function. In the `handleSubmit` function called `handleComment` function with the `id` and `value`(i.e. the comment).

          const  PersonData = (props) => {

            const [value, setValue] = useState('');

            const { empData, handleComment } = props;

            const { id, name, age, department, comment } = empData;

            const handleSubmit = (e) => {
              e.preventDefault(); // prevents page reloading

              if(value) handleComment( id, value );

              setValue(''); // clear input
            }

            return (
              <div>
                  <div>Name: {name}</div>
                  <div>Age: {age}</div>
                  <div>Department: {department}</div>
                  {comment && <div>Comment: {comment}</div>}


                  <form onSubmit={hadnleSubmit}>
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)}>
                    <button type="submit />
                  </form>

              </div>
            )
              }
