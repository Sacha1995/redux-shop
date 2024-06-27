import { useDispatch, useSelector } from "react-redux";
import {
  CHANGE_CONTENT_SHOPPINGCARD,
  DECREMENT,
  INCREMENT,
} from "../redux/types";
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
        const { id, title, quantity, price } = product;
        return (
          <div key={id} className="shoppingCardItem">
            <p
              onClick={() => {
                dispatch({
                  type: DECREMENT,
                  id,
                });
              }}
            >
              {" "}
              -{" "}
            </p>
            <p>{quantity}</p>
            <p
              onClick={() => {
                dispatch({
                  type: INCREMENT,
                  id,
                });
              }}
            >
              {" "}
              +{" "}
            </p>

            <p className="shoppingCardItemTitle">{title}</p>
            <p>£{Number(price).toFixed(2)}</p>
            <p>£{Number(price * quantity).toFixed(2)}</p>
            <img
              src="./bin.svg"
              alt="delete button"
              className="delete"
              onClick={() => {
                dispatch({ type: CHANGE_CONTENT_SHOPPINGCARD, id: id });
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
