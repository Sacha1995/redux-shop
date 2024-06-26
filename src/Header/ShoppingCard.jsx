import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCardContent from "../ShoppingCardContent/ShoppingCardContent";

const ShoppingCard = () => {
  const dispatch = useDispatch();
  const shoppingCard = useSelector((state) => state.shoppingCard);
  const viewShoppingCard = useSelector((state) => state.viewShoppingCard);

  return (
    <div
      className="shoppingCardContainer"
      onClick={() => {
        dispatch({ type: "VIEW_SHOPPING_CARD" });
      }}
    >
      <p>{shoppingCard.length}</p>
      <img src="./shopping.svg" alt="shopping card" className="shoppingCard" />
      {viewShoppingCard && <ShoppingCardContent />}
    </div>
  );
};

export default ShoppingCard;
