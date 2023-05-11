import Card from "./Kleinkram/Card";
import classes from "./Foodlist.module.css";
import Button from "./Kleinkram/Button";
import { useState, useContext } from "react";
import ItemContext from "./Kleinkram/item-context";

export default function FoodList(props) {
  const { totalAmount, dispatchtotalAmount } = useContext(ItemContext);
  useContext(ItemContext);
  const {
    totalvalue,
    itemCount,
    m1Value,
    m1Amount,
    m2Value,
    m2Amount,
    m3Value,
    m3Amount,
    m4Value,
    m4Amount,
  } = totalAmount;

  const handlerAddMeal = (i) => {
    console.log("Add meal, prop index", i);
    if (i === "Mama's Meatballs") {
      dispatchtotalAmount({
        type: "AMOUNT_ADDER_1",
        totval: totalvalue + 9.99,
        count: itemCount + 1,
        val: m1Value + 9.99,
        amount: m1Amount + 1,
      });
      console.log("This got printen MMM");
    }
    if (i === "The Wingi") {
      dispatchtotalAmount({
        type: "AMOUNT_ADDER_2",
        totval: totalvalue + 10.99,
        count: itemCount + 1,
        val: m2Value + 10.99,
        amount: m2Amount + 1,
      });
    }
    if (i === "The Veggie") {
      dispatchtotalAmount({
        type: "AMOUNT_ADDER_3",
        totval: totalvalue + 8.99,
        count: itemCount + 1,
        val: m3Value + 8.99,
        amount: m3Amount + 1,
      });
    }
    if (i === "Breakfast Sandwich") {
      dispatchtotalAmount({
        type: "AMOUNT_ADDER_4",
        totval: totalvalue + 9.99,
        count: itemCount + 1,
        val: m4Value + 9.99,
        amount: m4Amount + 1,
      });
    }
  };

  return (
    <Card className={classes.fdlst}>
      <div className={classes.unordered_foodlist}>
        {props.meals.map((i) => (
          <li key={i.name} className={classes.list}>
            <kiste1 className={classes.kiste1}>
              <div className={classes.name}>{i.name}</div>
              <div>{i.price + " € "}</div>
              <div className={classes.amount}> {i.amount} </div>
            </kiste1>
            <kiste1 className={classes.kiste1}>
              <div className={classes.ingredients}>
                {" " + i.ingredietns + "   "}
              </div>

              <div className={classes.button_box}>
                <Button
                  className={classes.button}
                  index={i.name}
                  type="text"
                  onClick={() => handlerAddMeal(i.name)}
                  text=" + Add"
                />
              </div>
            </kiste1>
          </li>
        ))}
      </div>
    </Card>
  );
}
