import { useContext } from "react";
import ItemContext from "./Kleinkram/item-context";
import Button from "./Kleinkram/Button";
import Card from "./Kleinkram/Card";
import classes from "./Cart.module.css";

function Cart(props) {
  const { totalAmount, dispatchtotalAmount } = useContext(ItemContext);
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

  let meals = props.meals;

  const filteredArray = meals.filter((item) => {
    if (item.amount != 0) {
      return item;
    }
  });
  const handlerAddMeal = (i) => {
    if (i === "Mama's Meatballs") {
      dispatchtotalAmount({
        type: "AMOUNT_ADDER_1",
        totval: totalvalue + 9.99,
        count: itemCount + 1,
        val: m1Value + 9.99,
        amount: m1Amount + 1,
      });
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
  const handlerSubstractMeal = (i) => {
    console.log("Add meal, prop index", i);
    if (i === "Mama's Meatballs") {
      dispatchtotalAmount({
        type: "AMOUNT_MINUS_1",
        totval: totalvalue - 9.99,
        count: itemCount - 1,
        val: m1Value - 9.99,
        amount: m1Amount - 1,
      });
    }

    if (i === "The Wingi") {
      dispatchtotalAmount({
        type: "AMOUNT_MINUS_2",
        totval: totalvalue - 10.99,
        count: itemCount - 1,
        val: m2Value - 10.99,
        amount: m2Amount - 1,
      });
    }
    if (i === "The Veggie") {
      dispatchtotalAmount({
        type: "AMOUNT_MINUS_3",
        totval: totalvalue - 8.99,
        count: itemCount - 1,
        val: m3Value - 8.99,
        amount: m3Amount - 1,
      });
    }
    if (i === "Breakfast Sandwich") {
      dispatchtotalAmount({
        type: "AMOUNT_MINUS_4",
        totval: totalvalue - 9.99,
        count: itemCount - 1,
        val: m4Value - 9.99,
        amount: m4Amount - 1,
      });
    }
  };

  console.log("Filtered ARray:", filteredArray);
  return (
    <div className={classes.backdrop}>
      <Card className={classes.cart}>
        <ul className={classes.unorderd_list_box}>
          {filteredArray.map((i) => (
            <li key={i.name} className={classes.list}>
              <div className={classes.name}>{i.name}</div>
              <div className={classes.ingredients}>{i.ingredietns + "   "}</div>
              <div>
                {" "}
                {i.price + " € "} x {i.amount}
              </div>
              <div>
                <Button
                  className={classes.button}
                  index={i.name}
                  type="text"
                  onClick={() => handlerSubstractMeal(i.name)}
                  text="-"
                />
                <Button
                  className={classes.button}
                  index={i.name}
                  type="text"
                  onClick={() => handlerAddMeal(i.name)}
                  text="+"
                />
              </div>
            </li>
          ))}
        </ul>

        <p>Total Amount: {parseFloat(totalvalue).toFixed(2)}€</p>
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
