import classes from "./CheckoutForm.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isSixChar = (value) => value.trim().length !== 6;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    address: true,
    city: true,
    postalCode: true,
  });

  const nameInput = useRef();
  const addressInput = useRef();
  const postalCodeInput = useRef();
  const cityInput = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInput.current.value;
    const enteredAddress = addressInput.current.value;
    const enteredPostalCode = postalCodeInput.current.value;
    const enteredCity = cityInput.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredPostalCodeIsValid = !isSixChar(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputValidity({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formValid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredAddress,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };
  const nameControlClasses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputValidity.address ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputValidity.postalCode ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInput} />
        {!formInputValidity.name && <p>Please enter valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={addressInput} />
        {!formInputValidity.address && <p>Please enter valid address!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInput} />
        {!formInputValidity.postalCode && (
          <p>Please enter valid postal code(6 character long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInput} />
        {!formInputValidity.city && <p>Please enter valid city!</p>}
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
