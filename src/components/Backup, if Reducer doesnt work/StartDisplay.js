import FoodList from "./FoodList";
import Welcome from "./Welcome";
import Navigator from "./Navigator";
import ItemContext from "./item-context";
import React, { useState, useReducer } from "react";

const totalAmountReducer = (state, action) => {
  return { totalvalue: 0, m1Value: 0, m2Value: 0, m2Value: 0, m4Value: 0 };
};

export default function StartDisplay() {
  const [itemCount, setItemCount] = useState(0);
  const [m1Amount, setM1Amount] = useState(0);
  const [m2Amount, setM2Amount] = useState(0);
  const [m3Amount, setM3Amount] = useState(0);
  const [m4Amount, setM4Amount] = useState(0);

  const meals = [
    {
      name: "Mama's Meatballs",
      ingredietns: "tiger bread, meatballs, tomatosauce, mozarella",
      price: 9.99,
      amount: m1Amount,
    },
    {
      name: "The Wingi",
      ingredietns:
        "tiger bread, korean fried chickem, The WingMan Sauce, cheddar",
      price: 10.99,
      amount: m2Amount,
    },
    {
      name: "The Veggie",
      ingredietns: "tiger bread, eggplant, tomatosauce, mozarella",
      price: 8.99,
      amount: m3Amount,
    },
    {
      name: "Breakfast Sandwich",
      ingredietns: "tiger bread, fried egg, bacon, cheese",
      price: 9.99,
      amount: m4Amount,
    },
  ];
  // const [totalAmount, dispatchtotalAmount] = useReducer(totalAmountReducer, {
  //   totalvalue: 0,
  //   itemCount: 0,
  //   m1Value: 0,
  //   m2Value: 0,
  //   m2Value: 0,
  //   m4Value: 0,
  // });

  return (
    <ItemContext.Provider
      value={{
        item: [itemCount, setItemCount],
        amountM1: [m1Amount, setM1Amount],
        amountM2: [m2Amount, setM2Amount],
        amountM3: [m3Amount, setM3Amount],
        amountM4: [m4Amount, setM4Amount],
      }}
    >
      <Navigator meals={meals} />
      <Welcome />
      <FoodList meals={meals} />
    </ItemContext.Provider>
  );
}
