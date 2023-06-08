import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/dessert.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Feast Hub</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!"></img>
      </div>
    </Fragment>
  );
};

export default Header;
