import { useDispatch } from "react-redux";
import Button from "../Reusable code/Button";

const Controls = ({ inCard, id }) => {
  const dispatch = useDispatch();

  return (
    <Button
      className={`btn ${inCard ? "delete" : "add"}`}
      text={inCard ? "Remove from card" : "Add to card"}
      onClick={() => {
        dispatch({
          type: inCard ? "DELETE_ITEM" : "ADD_TO_SHOPPINGCARD",
          id: id,
        });
      }}
    />
  );
};

export default Controls;
