/////// Client Data Request
/*
"use client";
import { useEffect, useState } from "react";
const ProductList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const jsonParse = await response.json();
    setList(jsonParse.products);
  };

  return (
    <div>
      <h1>Product list</h1>

      {list &&
        list.map((item) => {
          // eslint-disable-next-line react/jsx-key
          return <div>{item.title}</div>;
        })}
    </div>
  );
};

export default ProductList;

*/

/// ////////////   Server side component ////////////
export default async function ProductList() {
  const response = await fetch("https://dummyjson.com/products");
  const jsonParse = await response.json();
  const products = jsonParse.products;

  return (
    <div>
      <h1>Product list</h1>

      {products &&
        products.map((item) => {
          // eslint-disable-next-line react/jsx-key
          return <div>{item.title}</div>;
        })}
    </div>
  );
}
