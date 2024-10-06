import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductListing from "../Sections/ProductListing";

function MensPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMensProducts = async () => {
      try {
        const response = await axios.get("/api/v1/products/men");
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMensProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <ProductListing products={products} />
    </div>
  );
}

export default MensPage;
