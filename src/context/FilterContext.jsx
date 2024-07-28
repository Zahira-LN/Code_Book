import { createContext, useContext, useReducer } from "react";
import FilterReducer from "../reducer/FilterReducer";

const filterIntialState = {
  productLists: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  ratings: null,
};

export const FilterContext = createContext(filterIntialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilterReducer, filterIntialState);

  function intialProduct(products) {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products: products,
      },
    });
  }

 const filterProductList =rating(sort(inStock( bestSeller(state.productLists))));
 console.log(filterProductList);
 console.log(state.bestSellerOnly);
 console.log(state);

  function bestSeller(products){
    return  state.bestSellerOnly ?  products.filter((product)=>product.best_seller===true) : products
  }

  function inStock(products){
     return state.onlyInStock ? products.filter((product)=>product.in_stock===true) : products
  }

   function sort(products){
    if(sort.sortBy==="lowtohigh"){
      return products.sort((a,b)=>Number(a.price)-Number(b.price))

    }
    if(sort.sortBy==="hightolow"){
      return   products.sort((a,b)=>Number(b.price)-Number(a.price))
   }

   return products;
   }
   function rating(products){
    if(state.ratings=== "4STAR"){
      return products.filter((product)=>product.rating>=4);
    }
    if(state.ratings=== "3STAR"){
      return products.filter((product)=>product.rating>=3);
    }
    if(state.ratings=== "2STAR"){
      return products.filter((product)=>product.rating>=2);
    }
    if(state.ratings=== "1STAR"){
      return products.filter((product)=>product.rating>=1);
    }
    return products;
   }


  const value = {
    state,
    dispatch,
    productLists: filterProductList,
    intialProduct,
 

  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};


export const useFilter = () => {
  const context = useContext(FilterContext);
  return context;
};


