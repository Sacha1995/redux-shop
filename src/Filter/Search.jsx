import FormElements from "../Reusable code/FormElements";

const Search = ({ callback }) => {
  return (
    <FormElements
      type="text"
      id="searchStr"
      callback={callback}
      placeholder="Search movie"
    />
  );
};

export default Search;
