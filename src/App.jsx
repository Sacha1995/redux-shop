import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getLocalStorage } from "./Controllers";
import Header from "./Header/Header";
import Products from "./Products/Products";
import { REMEMBER_SHOPPING, SET_PRODUCTS } from "./redux/types";

const App = () => {
  const dispatch = useDispatch();

  const getApiData = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    dispatch({ type: SET_PRODUCTS, data });
  };

  useEffect(() => {
    const storedData = getLocalStorage("data");
    if (storedData) {
      dispatch({ type: REMEMBER_SHOPPING, storedData });
    } else {
      getApiData();
    }
  }, []);

  return (
    <>
      <Header />
      <Products />
    </>
  );
};

export default App;
