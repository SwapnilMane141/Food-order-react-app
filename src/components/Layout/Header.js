import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import Classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={Classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClicking={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={Classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious Food"></img>
      </div>
    </Fragment>
  );
};

export default Header;
