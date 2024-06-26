export function setLocalStorage(key, value) {
  if (typeof value === "string" || typeof value === "number") {
    localStorage.setItem(key, value);
    return;
  }
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key) {
  if (!localStorage.getItem(key)) {
    return;
  }
  if (
    localStorage.getItem(key).includes("{") ||
    localStorage.getItem(key).includes("[")
  ) {
    return JSON.parse(localStorage.getItem(key));
  }
  return localStorage.getItem(key);
}

export function calculateTotal(shoppingContent) {
  const _shoppingContent = [...shoppingContent];
  const priceArr = _shoppingContent.map((item) => {
    return item.price * 100;
  });
  const totalPrice = priceArr.reduce((acc, value) => {
    return acc + value;
  });
  return totalPrice / 100;
}
