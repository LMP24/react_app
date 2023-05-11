import Card from "./Card";
import Button from "./Button";
import React, { useState, useContext } from "react";
import Cart from "./Cart";
import ItemContext from "./item-context";
import classes from "./Navigator.module.css";

export default function Navigator(props) {
  const [showCart, setShowCart] = useState(false);
  const { item } = useContext(ItemContext);
  const [itemCount, setItemCount] = item;

  let meals = props.meals;

  const handlerChangeCartDisplay = () => {
    if (showCart === false) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  };

  return (
    <Card className={classes.navigator}>
      <div className={classes.brand_name}>Basti's Sandwich Shop</div>
      <Button
        key="Cart_button"
        text="Cart"
        type="text"
        onClick={handlerChangeCartDisplay}
      />
      {showCart && <Cart meals={meals} close={handlerChangeCartDisplay} />}
      {" " + itemCount}
    </Card>
  );
}
