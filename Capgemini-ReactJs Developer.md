# Capgemini Interview experience

## Role - React JS Developer | Designation - Senior Analyst

## Experience - 1yr 5months

## **Selected ✔️ | Offered ✔️**

---

## Direct Technical Interview

---

- ## General Questions

  1. Introduce yourself.
  2. What is your role/responsibilities?
  3. How many yrs of exp ?
  4. why do you want to switch ?

- ## Technical Questions

  1. What is React ? Props _vs_ State?
  1. React has one way data flow - explain it.
  1. Lifecycle methods in Class components. Hooks in function components.
  1. How to update state in class/function components
  1. \*Arrow functions vs. Normal functions
  1. Which react hook would you use to make api calls in a function component ?
  1. How to send data from parent to child? - using props. **Follow up**- how to send data from child component to parent component?
  1. Explain props drilling and how to avoid it(Explain React context or Redux) .
  1. In Redux, what are:
     - Action creator
     - Reducers
     - Dipatcher
     - mapStateToProps _vs_ mapDispatchToProps
  1. Testing in React JS:
     - What is JEST ?
     - What is Enzyme?
     - mount _vs_ shallow in Enzyme

- ## Output questions

  1.  What will the state value be just after it is updated? Consider the following code reference:

            class MyComponent extends React.Component {

              this.state = { value : 0 };

              someFunctionThatUpdatesState(newValue){
                  this.setState({ value : newValue});
                  console.log(this.state.value); /*What value will be printed here?*/
              }

            }

      **Follow Up:** How would you modify the code to print the latest state value?
