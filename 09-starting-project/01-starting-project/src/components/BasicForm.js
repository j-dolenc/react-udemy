import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid:enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset:resetName
  } = useInput(value => value.trim() !== '');
  const {
    value: enteredLastName,
    isValid:enteredLastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset:resetLastName
  } = useInput(value => value.trim() !== '');
  const {
    value: enteredEmail,
    isValid:enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset:resetEmail
  } = useInput(value => value.trim() !== '' && value.includes('@'));
  const formSubmissionHandler = (event) =>{
    event.preventDefault();
    if(!enteredEmailIsValid ||!enteredLastNameIsValid || !enteredNameIsValid){
      return;
    }

    resetName();
    resetEmail();
    resetLastName();
  }
  let formIsValid = enteredEmailIsValid && enteredLastNameIsValid && enteredNameIsValid;

  const nameClasses= nameHasError ? 'form-control invalid':'form-control';
  const lnameClasses= lastNameHasError ? 'form-control invalid':'form-control';
  const emailClasses= emailHasError ? 'form-control invalid':'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={nameChangedHandler}onBlur={nameBlurHandler}value={enteredName}/>
          {nameHasError && <p className='error-text'>Name can not be empty.</p>}
        </div>
        <div className={lnameClasses}>
          <label htmlFor='lname'>Last Name</label>
          <input type='text' id='lname' onChange={lastNameChangedHandler}onBlur={lastNameBlurHandler}value={enteredLastName}/>
          {lastNameHasError && <p className='error-text'>Last name can not be empty.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' onChange={emailChangedHandler}onBlur={emailBlurHandler} value={enteredEmail}/>
        {emailHasError && <p className='error-text'>Please enter a valid email.</p>}
      </div>
      <div className='form-actions'>
        <button  disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
