import React, { useEffect, useState } from "react";
import ProductCard from "./component/ProductCard";
import FilterBar from "./component/FilterBar";
import { useLocation } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useFilter } from "../../context/FilterContext";
import { getProductList } from "../../services/productService";

const ProductList = () => {
  const {productLists,intialProduct} = useFilter();
  useTitle("Explore ebook Collection")
  const [showFilter,setShowFilter] = useState(false);
  const search = useLocation();
  console.log(productLists);

  const  FetchProductList = async () =>{
    try {
     const data = await getProductList(search)
      intialProduct(data);

    } catch (error) {
      console.log("Unable To fetch!!...")
    }
  }


  useEffect(()=>{
    FetchProductList();
  },[search])



  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All eBooks ({productLists.length})
          </span>
          <span>
            <button
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
              onClick={()=>setShowFilter(true)}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">
{
  productLists.map((product)=>(
    <ProductCard key={product.id} product={product}/>
  ))
}
        </div>
      </section>

     {showFilter  && <FilterBar setShowFilter={setShowFilter}/>}
    </main>
  );
};

export default ProductList;
