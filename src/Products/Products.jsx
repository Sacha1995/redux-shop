import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSortedandFiltered } from "../Filter/getSortedandFiltered";
import { TOGGLE_DESCRIPTION } from "../redux/types";
import Controls from "./Controls";

const Products = () => {
  const products = useSelector((state) => state.products);
  const searchStr = useSelector((state) => state.searchStr);
  const select = useSelector((state) => state.select);
  const dispatch = useDispatch();

  const filtered = useMemo(() => {
    if (!products) {
      return [];
    }
    return getSortedandFiltered(products, searchStr, select);
  }, [products, searchStr, select]);

  if (!products) {
    return <p>Loading...</p>;
  }

  if (filtered.length === 0) {
    return <p>No matches</p>;
  }

  return (
    <div className="products">
      {filtered.map((product) => {
        const {
          title,
          image,
          description,
          price,
          id,
          viewDescription,
          inCard,
        } = product;
        return (
          <div className="productCard" key={id}>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>£{price}</p>
            <p
              className="description"
              onClick={() => dispatch({ type: TOGGLE_DESCRIPTION, id: id })}
            >
              Description <span className="arrow">&#9660;</span>
            </p>
            <p className={viewDescription ? "view" : "noview"}>{description}</p>
            <Controls inCard={inCard} id={id} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
