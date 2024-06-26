import { useDispatch } from "react-redux";
import FormElements from "../Reusable code/FormElements";
import { FORM_EVENT } from "../redux/types";

const Sort = () => {
  const dispatch = useDispatch();

  return (
    <div className="dropdown">
      <FormElements
        type="select"
        label="Order:"
        id="select"
        name="order"
        callback={(e) => {
          dispatch({ type: FORM_EVENT, e });
        }}
        options={[
          "Original",
          "A to Z",
          "Z to A",
          "Price: low to high",
          "Price: high to low",
        ]}
      />
    </div>
  );
};

export default Sort;
