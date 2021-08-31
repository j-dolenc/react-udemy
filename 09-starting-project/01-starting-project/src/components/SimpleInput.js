import { useState } from "react"; //uporabis ponavadi ali ref ali state...

//ce bi sam enkrat rad pogledu kaj je blo submitano, je mogoce boljse uporavit ref
//ce pa rabs valu po vsakmu tipkanju pa je bols uporablat state...
//
const SimpleInput = (props) => {
  //const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  //const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  //const [formIsValid,setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  
  const [enteredEmail,setEnteredEmail]= useState('');
  const [enteredEmailTouched,setEnteredEmailTouched]= useState(false);
  const enteredEmailValid = enteredEmail.includes('@') && enteredEmail.trim() !== '';
  const emailInputisInvalid = !enteredEmailValid && enteredEmailTouched

  let formIsValid = false;
    if(enteredNameIsValid && enteredEmailValid) formIsValid = true;
    
  

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // setEnteredNameTouched(true);   
  };
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    // setEnteredNameTouched(true);   
  };

  const formSubmissionHandler = (event) => {
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    event.preventDefault(); //ce ne bi blo tega bi se stran se enkrat reloadala
    if (!enteredNameIsValid ||!enteredEmailValid) {
      return;
    }
    console.log(enteredName);
    // const enteredValue = nameInputRef.current.value;
    // console.log("Ref value:" + enteredValue);
    //nameInputRef.current.vlaue=""; --> ni tok kul, k gres direktno spreminjat DOM, kar pa ni priporocljivo
    setEnteredName("");
    setEnteredEmail("");
    setEnteredEmailTouched(false);
    setEnteredNameTouched(false);
  };
  const nameInputBlurHandler= () => {
      setEnteredNameTouched(true);  
  }
  const emailInputBlurHandler= () => {
    setEnteredEmailTouched(true);  
}
  
  const nameInputClasses = nameInputIsInvalid
    ?"form-control invalid"
    : "form-control";
    const emailInputClasses = emailInputisInvalid
    ?"form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty!!</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your e-mail</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputisInvalid && (
          <p className="error-text">Email must not be empty and must contain '@'!!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
