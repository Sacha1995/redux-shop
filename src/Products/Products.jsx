import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_DESCRIPTION } from "../redux/types";

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  if (!products) {
    return <p>Loading...</p>;
  }

  return (
    <div className="products">
      {products.map((product) => {
        const { title, image, description, price, id, viewDescription } =
          product;
        return (
          <div
            className="productCard"
            key={id}
            onClick={() => dispatch({ type: TOGGLE_DESCRIPTION, id: id })}
          >
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>£{price}</p>
            {console.log(viewDescription)}
            <p className={viewDescription ? "view" : "noview"}>{description}</p>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default Products;
