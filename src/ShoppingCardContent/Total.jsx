import { useSelector } from "react-redux";
import { calculateTotal } from "../Controllers";

const Total = () => {
  const shoppingCard = useSelector((state) => state.shoppingCard);

  const total = calculateTotal(shoppingCard);

  return (
    <div className="shoppingCardItem total">
      <p>Total:</p>
      <p>£{total}</p>
    </div>
  );
};

export default Total;
