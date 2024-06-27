import { useDispatch, useSelector } from "react-redux";
import { getQuantity } from "../Controllers";
import { DECREMENT, INCREMENT } from "../redux/types";

const Quantity = ({ id }) => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const quantity = getQuantity(id, products);

  return (
    <div className="quantity">
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
    </div>
  );
};

export default Quantity;
