import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import Product from "../../Components/Product/Product";
import "./searchpage.css";

/**
 * Search page containing products fulfilling a search criteria
 * @returns 
 */
const Searchpage = () => {
  const params = useParams(); // Params from the dynamic URL

  const [products, setProducts] = useState([]);

  const backend_endpoint = import.meta.env.VITE_BACKEND_URL;

  /**
   * Fetch products basd on params.query
   */
  const fetchSearchProducts = async () => {
    await fetch(`${backend_endpoint}/api/v1/product/byName/${params.query}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.status == 500) {
          console.log("No Products Found");
        } else {
          setProducts(data);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchSearchProducts();
  }, []);

  return (
    <div className="searchpage_container">
      <Header />
      <h1>Search</h1>
      <div className="searchproduct_container">
        <div className="product_box">
          {products && products.length != 0 ? (
            products.map((product, index) => (
              <Product product={product} key={index} />
            ))
          ) : (
            <h3>No Products Found</h3>
          )}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Searchpage;
