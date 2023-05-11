import Card from "./Card";
import classes from "./Foodlist.module.css";
import Button from "./Button";
import { useState, useContext } from "react";
import ItemContext from "./item-context";

export default function FoodList(props) {
  const { item, amountM1, amountM2, amountM3, amountM4 } =
    useContext(ItemContext);

  const [itemCount, setItemCount] = item;
  const [m1Amount, setM1Amount] = amountM1;
  const [m2Amount, setM2Amount] = amountM2;
  const [m3Amount, setM3Amount] = amountM3;
  const [m4Amount, setM4Amount] = amountM4;

  console.log("itemCount", itemCount);

  const handlerAddMeal = (i) => {
    console.log("Add meal, prop index", i);
    if (i === "Mama's Meatballs") {
      setM1Amount(m1Amount + 1);
      setItemCount(itemCount + 1);
      console.log("Itemcount in handler", itemCount);
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

  return (
    <Card className={classes.fdlst}>
      {" "}
      <ul className={classes.foodlist}>
        <>
          {props.meals.map((i) => (
            <li key={i.name} className={classes.listitem}>
              <div className={classes.name}>{i.name}</div>
              <div>{i.ingredietns + "   " + i.price + "€ "}</div>
              <> Amount: {i.amount} </>
              <Button
                index={i.name}
                type="text"
                onClick={() => handlerAddMeal(i.name)}
                text=" + Add"
              />
            </li>
          ))}
        </>
      </ul>
    </Card>
  );
}
