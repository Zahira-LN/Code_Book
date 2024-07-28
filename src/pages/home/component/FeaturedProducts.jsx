import React, { useEffect, useState } from "react";
import ProductCard from "../../products/component/ProductCard";
import { getFeaturedList } from "../../../services/productService";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await getFeaturedList();
      setProducts(data);
      console.log(products);
    } catch (error) {
      console.log("unable to fetch!!");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
