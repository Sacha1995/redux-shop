import { useDispatch, useSelector } from "react-redux";
import { DELETE_ITEM } from "../redux/types";
import Description from "./Description";
import Total from "./Total";

const ShoppingCardContent = () => {
  const shoppingCard = useSelector((state) => state.shoppingCard);
  const dispatch = useDispatch();

  if (!shoppingCard) {
    return <p>Your shopping card is empty.</p>;
  }

  return (
    <div className="shoppingCardContent">
      <Description />
      {shoppingCard.map((product) => {
        return (
          <div key={product.id} className="shoppingCardItem">
            <p className="shoppingCardItemTitle">{product.title}</p>
            <p>£{product.price}</p>
            <img
              src="./bin.svg"
              alt="delete button"
              className="delete"
              onClick={() => {
                dispatch({ type: DELETE_ITEM, id: product.id });
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
