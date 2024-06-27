import { useSelector } from "react-redux";
import { calculateTotal } from "../Controllers";

const Total = () => {
  const products = useSelector((state) => state.products);

  let shoppingCard = products.filter((product) => {
    return product.inCard;
  });

  const total = calculateTotal(shoppingCard);

  return (
    <div className="shoppingCardItem total">
      <p>Total:</p>
      <p>£{total}</p>
    </div>
  );
};

export default Total;
