import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [fromInputsValidity,setFormInputsValidity]= useState({
    name:true,street:true,city:true,postal:true
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = isFiveChars(enteredPostal);
    setFormInputsValidity({
        name:enteredNameIsValid,
        street:enteredStreetIsValid,
        city:enteredCityIsValid, 
        postal:enteredPostalIsValid
    });
    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid &&
      enteredStreetIsValid;
      if(!formIsValid){
          return;
      }
      //submit teh cart data
      props.onConfirm({
          name:enteredName,
          city:enteredCity,
          street:enteredStreet,
          postal:enteredPostal
      });
  };

  const nameCtrl = `${classes.control} ${fromInputsValidity.name ? '' : classes.invalid}`;
  const cityCtrl = `${classes.control} ${fromInputsValidity.city ? '' : classes.invalid}`;
  const streetCtrl = `${classes.control} ${fromInputsValidity.street ? '' : classes.invalid}`;
  const postalCtrl = `${classes.control} ${fromInputsValidity.postal ? '' : classes.invalid}`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameCtrl}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!fromInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetCtrl}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!fromInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCtrl}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!fromInputsValidity.postal && <p>Please enter a valid postal code(5 numbers)!</p>}
      </div>
      <div className={cityCtrl}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!fromInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
