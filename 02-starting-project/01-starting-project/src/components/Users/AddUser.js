//logic to add a new user 
import {useState} from 'react';
import Card from "../UI/Card"; 
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';
import { useRef } from 'react';
const AddUser = props => {

  const nameInputRef =useRef();
  const ageInputRef =useRef();

    // const [enteredUsername,setEnteredUsername] = useState('');
    // const [enteredAge,setEnteredAge] = useState('');
    const [error,setError] = useState();

    const addUserHandler = event =>{
        event.preventDefault();
        const enteredName = (nameInputRef.current.value);  
        const enteredUserAge = (ageInputRef.current.value);  
        if(enteredName.trim().length === 0 ||enteredUserAge.trim().length === 0){
            setError({
              title: "Invalid Input",
              message: "Plesase enter a valid name and age (non-empty values).",
            });
            return;
        }
        if(+enteredUserAge < 1){
          setError({
            title: "Invalid Input",
            message: "Plesase enter a valid age (>0).",
          });
            return
        }
        props.onAddUser(enteredName,enteredUserAge);
        nameInputRef.current.value="";
        ageInputRef.current.value="";
        //console.log(enteredAge,enteredUsername);
        // setEnteredUsername('');
        // setEnteredAge('');
    }

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // }
    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // }
    const errorHandler = () => {
      setError(null);
    }

    return (
      <div>
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onButton={errorHandler}
          />
        )}
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              // value={enteredUsername}
              // onChange={usernameChangeHandler}
              ref={nameInputRef}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              id="age"
              // value={enteredAge}
              // onChange={ageChangeHandler}
              ref={ageInputRef}
            />
            <Button type="submit">Add User</Button>
          </form>
        </Card>
      </div>
    );
}
export default AddUser;