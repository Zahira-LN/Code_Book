export async function getProductList(searchTerm){
    const response = await fetch('http://localhost:8000/products');
    const data = await response.json();
   
    return data;
}

export async function getProduct(id){
    const response = await fetch(`http://localhost:8000/products/${id}`);
     const data =await response.json();
    return data;
}

export async function getFeaturedList(){
    const response = await fetch("http://localhost:3000/featured_products");
    const data = await response.json();
    return data;
}