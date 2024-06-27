import { useDispatch, useSelector } from "react-redux";
import { CHANGE_CONTENT_SHOPPINGCARD } from "../redux/types";
import Description from "./Description";
import Total from "./Total";

const ShoppingCardContent = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  let shoppingCard = products.filter((product) => {
    return product.inCard;
  });

  if (!shoppingCard) {
    return <p>Your shopping card is empty.</p>;
  }

  return (
    <div className="shoppingCardContent">
      <Description />
      {shoppingCard.map((product) => {
        return (
          <div key={product.id} className="shoppingCardItem">
            <p>{product.quantity}</p>
            <p className="shoppingCardItemTitle">{product.title}</p>
            <p>£{Number(product.price).toFixed(2)}</p>
            <p>£{Number(product.price * product.quantity).toFixed(2)}</p>
            <img
              src="./bin.svg"
              alt="delete button"
              className="delete"
              onClick={() => {
                dispatch({ type: CHANGE_CONTENT_SHOPPINGCARD, id: product.id });
              }}
            />
          </div>
        );
      })}
      <Total />
    </div>
  );
};

export default ShoppingCardContent;
