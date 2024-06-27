import { useDispatch } from "react-redux";
import Button from "../Reusable code/Button";
import { ADD_TO_SHOPPINGCARD, DELETE_ITEM } from "../redux/types";
import Quantity from "./Quantity";

const Controls = ({ inCard, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="controlsProduct">
      <Button
        className={`btn ${inCard ? "delete" : "add"}`}
        text={inCard ? "Remove from card" : "Add to card"}
        onClick={() => {
          dispatch({
            type: inCard ? DELETE_ITEM : ADD_TO_SHOPPINGCARD,
            id: id,
          });
        }}
      />
      {inCard && <Quantity id={id} />}
    </div>
  );
};

export default Controls;
