import Search from "../Filter/Search";
import Sort from "../Filter/Sort";
import ShoppingCard from "./ShoppingCard";

const Header = () => {
  return (
    <div className="header">
      <Search />
      <Sort />
      <ShoppingCard />
    </div>
  );
};

export default Header;
