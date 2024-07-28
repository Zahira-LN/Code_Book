import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../../../components/Element/Rating";
import { useCart } from "../../../context/CartContext";

const ProductCard = ({ product }) => {
  const { id } = product;
  const { addToCart, removeCart,cartLists } = useCart();
  const [addCart, setaddCart] = useState(false);

  const handleClick = (product) => {
    addToCart(product);
    setaddCart(true);
  };

  const handleRemove = (product) => {
    removeCart(product);
    setaddCart(false);
  };

  useEffect(()=>{
    const productCart = cartLists.find((item)=>item.id===product.id);
    productCart ? setaddCart(true) : setaddCart(false);

  },[])

  return (
    <div className="m-3 max-w-[23rem] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${id}`} className="relative">
        {product.best_seller && (
          <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
            Best Seller
          </span>
        )}
        <img className="rounded-t-lg w-full h-64" src={product.poster} alt="" />
      </Link>
      <div className="p-5">
        <Link to={`/products/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.overview}
        </p>

        <div className="flex items-center my-2">
          <Rating rating={product.rating} />
        </div>

        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>$</span>
            <span>{product.price}</span>
          </span>
          {addCart ? (
            <button
              onClick={() => handleRemove(product)}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800"
            >
              Remove <i className="ml-1 bi bi-minus-lg"></i>
            </button>
          ) : (
            <button
              onClick={() => handleClick(product)}
              className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  ${product.in_stock ? "" : "cursor-not-allowed" }`}
              disabled={product.in_stock ? false : true }
            >
              Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
            </button>
          )}

          {/* <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800">Remove Item <i className="ml-1 bi bi-trash3"></i></button> */}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
