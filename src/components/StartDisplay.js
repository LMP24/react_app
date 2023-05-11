import FoodList from "./FoodList";
import Welcome from "./Welcome";
import Navigator from "./Navigator";
import ItemContext from "./Kleinkram/item-context";
import React, { useReducer } from "react";

const totalAmountReducer = (state, action) => {
  if (action.type === "AMOUNT_ADDER_1") {
    let obj = {
      ...state,
      totalvalue: action.totval,
      itemCount: action.count,
      m1Value: action.val,
      m1Amount: action.amount,
    };
    return obj;
  }
  if (action.type === "AMOUNT_ADDER_2") {
    return {
      ...state,
      totalvalue: action.totval,
      itemCount: action.count,
      m2Value: action.val,
      m2Amount: action.amount,
    };
  }
  if (action.type === "AMOUNT_ADDER_3") {
    return {
      ...state,
      totalvalue: action.totval,
      itemCount: action.count,
      m3Value: action.val,
      m3Amount: action.amount,
    };
  }
  if (action.type === "AMOUNT_ADDER_4") {
    return {
      ...state,
      totalvalue: action.totval,
      itemCount: action.count,
      m4Value: action.val,
      m4Amount: action.amount,
    };
  }
  if (action.type === "AMOUNT_MINUS_1") {
    return {
      ...state,
      totalvalue: action.totval,
      itemCount: action.count,
      m1Value: action.val,
      m1Amount: action.amount,
    };
  }
  if (action.type === "AMOUNT_MINUS_2") {
    return {
      ...state,
      totalvalue: action.totval,
      itemCount: action.count,
      m2Value: action.val,
      m2Amount: action.amount,
    };
  }
  if (action.type === "AMOUNT_MINUS_3") {
    return {
      ...state,
      totalvalue: action.totval,
      itemCount: action.count,
      m3Value: action.val,
      m3Amount: action.amount,
    };
  }
  if (action.type === "AMOUNT_MINUS_4") {
    return {
      ...state,
      totalvalue: action.totval,
      itemCount: action.count,
      m4Value: action.val,
      m4Amount: action.amount,
    };
  }

  return {
    totalvalue: 0,
    itemCount: 0,
    m1Value: 0,
    m1Amount: 0,
    m2Value: 0,
    m2Amount: 0,
    m2Value: 0,
    m3Amount: 0,
    m4Value: 0,
    m4Amount: 0,
  };
};

export default function StartDisplay() {
  const [totalAmount, dispatchtotalAmount] = useReducer(totalAmountReducer, {
    totalvalue: 0,
    itemCount: 0,
    m1Value: 0,
    m1Amount: 0,
    m2Value: 0,
    m2Amount: 0,
    m3Value: 0,
    m3Amount: 0,
    m4Value: 0,
    m4Amount: 0,
  });
  const meals = [
    {
      name: "Mama's Meatballs",
      ingredietns: "Tiger bread, meatballs, tomato sauce, mozarella",
      price: 9.99,
      amount: totalAmount.m1Amount,
    },
    {
      name: "The Wingi",
      ingredietns:
        "Tiger bread, korean fried chicken, The Wing-Man-Sauce, cheddar cheese",
      price: 10.99,
      amount: totalAmount.m2Amount,
    },
    {
      name: "The Veggie",
      ingredietns: "Tiger bread, eggplant, tomato sauce, mozarella",
      price: 8.99,
      amount: totalAmount.m3Amount,
    },
    {
      name: "Breakfast Sandwich",
      ingredietns: "Tiger bread, fried egg, bacon, cheese",
      price: 9.99,
      amount: totalAmount.m4Amount,
    },
  ];
  console.log("Amounts:", totalAmount.m1Amount, typeof totalAmount.m1Amount);
  return (
    <ItemContext.Provider value={{ totalAmount, dispatchtotalAmount }}>
      <Navigator meals={meals} />
      <Welcome />
      <FoodList meals={meals} />
    </ItemContext.Provider>
  );
}
