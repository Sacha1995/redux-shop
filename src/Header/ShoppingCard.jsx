import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCardContent from "../ShoppingCardContent/ShoppingCardContent";

const ShoppingCard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const viewShoppingCard = useSelector((state) => state.viewShoppingCard);

  let shoppingCard = products.filter((product) => {
    return product.inCard;
  });

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
