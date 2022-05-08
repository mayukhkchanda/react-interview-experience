# Global Healthcare Billing Partners Interview experience

## Role - React JS Developer | Designation - Software Developer

## Experience - 1yr 5months

## **Selected & Offered**

---

## Direct Technical Interview

---

- This was a short interview and I don't clearly remember all of the questions asked as it was a while back.

- ## General Questions

  1. Introduce yourself.
  1. Role/Responsibilities in current organisation?
  1. Total years of experience and relevant experience ?
  1. Why do you want to switch ?
  1. Techonologies currently being used for Front-end stack(eg- Webpack, Babel, React etc)

- ## Technical Questions

  1.  Most of the questions I've covered in other interview experiences. Please check them too.
  1.  Difference between _var_, _let_ & _const_ ?
  1.  Block scope vs. Function scope
  1.  Coding Question:

      - Create an `App` component and a `form` child component of the `App` component. The `form` child component contains an `input` box and a `submit` button. The `App` component contains an unordered list.

        After the user has typed something in the input box and clicked on submit, the text should appear as a list item in the unordered list in the app component.

        - My Approach:

          Used `useState` for storing all the submitted texts.

          Used `onSubmit` that takes the submitted text and adds it to the list of all the texts. Passed `onSubmit` to `Form` child component that would call this function with the text that was entered when form is submitted.

                const App = () => {
                    const [list, setList] = useState([]);

                     onSubmit(text) {
                         const newList = [...list, text];
                         setList(newList);
                     }

                     return (
                         <Form onSubmit={ onSubmit } />
                         {
                             <ul>
                                 list.length > 0 &&
                                 list.map( (listEl) => (
                                     <li key={listEl}>{listEl}</li>
                                    )
                                 );
                              </ul>
                         }
                     );
                    }

                    const Form = (props) => {
                        const { onSubmit } = props;
                        const [value, setValue] = useState('');

                        const handleSubmit = (e) => {
                            e.preventDefault();

                            onSubmit(value);

                            setValue('');
                        }

                        return (
                            <form onSubmit={handleSubmit}>
                                <input type='text' value={value} onChange={ (e) => setValue(e.target.value) } />
                                <button type='submit' />
                            </form>
                        );
                    }
