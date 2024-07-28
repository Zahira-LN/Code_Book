function getSession(){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    return {token, cbid};
}

export async function getUser(){
    const browserData = getSession();
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("id"));
    const response = await fetch(`http://localhost:8000/600/users/${cbid}`, {
        method: "get",
        headers: {
          "content-type": "/application.json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
    return data;
}

export async function getUserOrders(){
    const token = JSON.parse(sessionStorage.getItem('token'));
    const id= JSON.parse(sessionStorage.getItem("id"));
    const browserData = getSession();
    const response = await fetch(`http://localhost:8000/660/orders?user.id=${id}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      const data = await response.json();
    return data;
}

export async function createOrder(cartLists, total, user){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("id"));
    const browserData = getSession();
    const authDetail = {
        cartLists: cartLists,
        amount_paid: total,
        quantity: cartLists.length,
        user: {
          name: user.name,
          email: user.email,
          id: user.id,
        },
      };
  
      const response = await fetch("http://localhost:8000/660/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(authDetail),
      });
  
      const data = await response.json();
    return data;
}