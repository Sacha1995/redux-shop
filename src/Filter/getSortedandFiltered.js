export const getSortedandFiltered = (data, searchStr, select) => {
  let filtered = [...data];

  // filter by search
  if (searchStr) {
    filtered = filtered.filter((product) => {
      return product.title.toLowerCase().includes(searchStr.toLowerCase());
    });
  }

  //sort
  switch (select) {
    case "Original":
      break;
    case "A to Z":
      filtered.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        } else if (a.title < b.title) {
          return -1;
        }
        return 0;
      });
      break;
    case "Z to A":
      filtered.sort((a, b) => {
        if (a.title < b.title) {
          return 1;
        } else if (a.title > b.title) {
          return -1;
        }
        return 0;
      });
      break;
    case "Price: low to high":
      filtered.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        } else if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
      break;
    case "Price: high to low":
      filtered.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        } else if (a.price > b.price) {
          return -1;
        }
        return 0;
      });
      break;
    default:
      console.log("something went wrong with the sorting");
      break;
  }
  return filtered;
};
