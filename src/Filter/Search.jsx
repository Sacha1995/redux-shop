import { useDispatch } from "react-redux";
import FormElements from "../Reusable code/FormElements";
import { FORM_EVENT } from "../redux/types";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div className="search">
      <FormElements
        type="text"
        id="searchStr"
        callback={(e) => {
          dispatch({ type: FORM_EVENT, e });
        }}
        placeholder="Search movie"
      />
    </div>
  );
};

export default Search;
