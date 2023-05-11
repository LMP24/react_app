import { useContext } from "react";
import ItemContext from "./item-context";
import Button from "./Button";
import Card from "./Card";
import classes from "./Cart.module.css";

function Cart(props) {
  const { item, amountM1, amountM2, amountM3, amountM4 } =
    useContext(ItemContext);
  const [itemCount, setItemCount] = item;
  const [m1Amount, setM1Amount] = amountM1;
  const [m2Amount, setM2Amount] = amountM2;
  const [m3Amount, setM3Amount] = amountM3;
  const [m4Amount, setM4Amount] = amountM4;

  let meals = props.meals;

  const filteredArray = meals.filter((item) => {
    if (item.amount != 0) {
      return item;
    }
  });
  const handlerAddMeal = (i) => {
    console.log("Add meal, prop index", i);
    if (i === "Mama's Meatballs") {
      setM1Amount(m1Amount + 1);
      setItemCount(itemCount + 1);
    }
    if (i === "The Wingi") {
      setM2Amount(m2Amount + 1);
      setItemCount(itemCount + 1);
    }
    if (i === "The Veggie") {
      setM3Amount(m3Amount + 1);
      setItemCount(itemCount + 1);
    }
    if (i === "Breakfast Sandwich") {
      setM4Amount(m4Amount + 1);
      setItemCount(itemCount + 1);
    }
  };
  const handlerSubstractMeal = (i) => {
    console.log("Add meal, prop index", i);
    if (i === "Mama's Meatballs") {
      setM1Amount(m1Amount - 1);
      setItemCount(itemCount - 1);
    }
    if (i === "The Wingi") {
      setM2Amount(m2Amount - 1);
      setItemCount(itemCount - 1);
    }
    if (i === "The Veggie") {
      setM3Amount(m3Amount + 1);
      setItemCount(itemCount + 1);
    }
    if (i === "Breakfast Sandwich") {
      setM4Amount(m4Amount - 1);
      setItemCount(itemCount - 1);
    }
  };

  console.log("Filtered ARray:", filteredArray);
  return (
    <div className={classes.backdrop}>
      <Card>
        {filteredArray.map((i) => (
          <li key={i.name} className={classes.listitem}>
            <div className={classes.name}>{i.name}</div>
            <div>{i.ingredietns + "   " + i.price + "€ "}</div>
            <div>//Price x {i.amount}</div>
            <Button
              index={i.name}
              type="text"
              onClick={() => handlerSubstractMeal(i.name)}
              text="-"
            />
            <Button
              index={i.name}
              type="text"
              onClick={() => handlerAddMeal(i.name)}
              text="+"
            />
          </li>
        ))}
        <p>Total Amount: €</p>
        <div>
          <Button key="Close" text="Close" type="text" onClick={props.close} />
          <Button
            key="Order"
            text="Order"
            type="text"
            onClick={() => {
              console.log("Ordering...");
            }}
          />
        </div>
      </Card>
    </div>
  );
}
export default Cart;
