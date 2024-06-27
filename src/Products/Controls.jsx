import { useDispatch } from "react-redux";
import Button from "../Reusable code/Button";
import { CHANGE_CONTENT_SHOPPINGCARD } from "../redux/types";
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
            type: CHANGE_CONTENT_SHOPPINGCARD,
            id: id,
          });
        }}
      />
      {inCard && <Quantity id={id} />}
    </div>
  );
};

export default Controls;
