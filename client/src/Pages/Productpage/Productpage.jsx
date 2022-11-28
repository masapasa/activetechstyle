import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import "./productpage.css";

const Productpage = () => {

  const [product, setProduct] = useState({})

  const backend_endpoint = "http://localhost:8080";

  const fetchProductById = async (id) => {
    await fetch(`${backend_endpoint}/api/v1/product/byId/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProductById(1);
  }, []);

  const addToCart = () => {
    console.log("Added to Cart");
  };

  return (
    <div className="productpage_container">
      <Header />
      <div className="individualproduct_container">
        <h1>{product.name}</h1>
        <img src={product.image} />
        <p>{product.description}</p>
        <p>${product.price}</p>
        <div className="addtocart_button">
          <button onClick={() => addToCart()}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Productpage;
