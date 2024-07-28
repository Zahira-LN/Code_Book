const FilterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "PRODUCT_LIST":
      return { ...state, productLists: payload.products };
    case "BEST_SELLER_ONLY":
      return { ...state, bestSellerOnly: payload.bestSellerOnly };
    case "INSTOCK_ONLY":
      return { ...state, onlyInStock: payload.onlyInStock };
    case "RATINGS":
      return { ...state, ratings: payload.ratings };
    case "SORTBYS":
      return { ...state, sortBy: payload.sortBy };
    case "CLEAR_FILTER":
      return {
        ...state,
        onlyInStock: false,
        bestSellerOnly: false,
        sortBy: null,
        ratings: null,
      };
    default:
      return state;
      f;
  }
};

export default FilterReducer;
