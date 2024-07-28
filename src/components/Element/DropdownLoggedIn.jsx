import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../services/dataService";

export const DropdownLoggedIn = ({ setDropDown }) => {
  const navigate = useNavigate();
  const [user,setUser] = useState({})

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
    setDropDown(false);
    navigate("/");
  };

  const handleClose = () => {
    setDropDown(false);
  };


  useEffect(()=>{
          async function fetchData(){
            const data = await getUser();
            data.email ? setUser(data) : handleLogout();
          }
          fetchData();
  },[])

  return (
    <div
      id="dropdownAvatar"
      className="select-none absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    >
      <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div className="font-medium truncate">{user.email}</div>
      </div>
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <Link
            onClick={handleClose}
            to="/products"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            All eBooks
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setDropDown(false)}
            to="/dashbaordpage"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Dashboard
          </Link>
        </li>
      </ul>
      <div className="py-1">
        <span
          className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          onClick={handleLogout}
        >
          Log out
        </span>
      </div>
    </div>
  );
};
