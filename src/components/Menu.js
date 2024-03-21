import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../store/cartSelector";
import { AppContext } from "../contexts/AppContext";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const [dropdownsOpen, setDropdownsOpen] = useState([]);
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const { updateSelectedMenu } = useContext(AppContext);

  const toggleDropdown = (menu) => {
    dropdownsOpen.includes(menu)
      ? setDropdownsOpen(dropdownsOpen.filter((dropdown) => dropdown !== menu))
      : setDropdownsOpen([...dropdownsOpen, menu]);
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const response = await fetch(
        "https://epicvirtualsolution.com/linkskill/api/frontend.php"
      );
      const data = await response.json();
      setMenuData(data.menu);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  const renderSubMenu = (subMenu) => {
    return (
      <>
        {Object.entries(subMenu).map(([key, value]) => (
          <div key={key}>
            {typeof value === "object" ? (
              <div className="relative">
                <button
                  type="button"
                  id={`dropdown-${key}`}
                  className="font-semibold focus:outline-none"
                  onClick={() => toggleDropdown(key)}
                >
                  {key}
                </button>
                {dropdownsOpen.includes(key) && (
                  <div className="absolute z-10 bg-gray-900 text-white py-2 px-4 mt-1 rounded-md shadow-lg">
                    {renderSubMenu(value)}
                  </div>
                )}
              </div>
            ) : (
              <p className="cursor-pointer" onClick={() => handleClick(value)}>
                {value}
              </p>
            )}
          </div>
        ))}
      </>
    );
  };

  const handleClick = (menuName) => {
    if (menuName === "Mobile") {
      navigate("/products");
    } else {
      updateSelectedMenu(menuName);
      navigate("/");
    }
  };

  return (
    <>
      <nav className="bg-[#374151] text-white">
        <div className=" h-16 mx-auto px-8 py-2 flex justify-between items-center">
          <div className="flex space-x-4">
            {menuData &&
              Object.entries(menuData).map(([key, value]) => (
                <div key={key}>
                  {typeof value === "object" ? (
                    <div className="relative">
                      <button
                        type="button"
                        id={`dropdown-${key}`}
                        className="font-semibold focus:outline-none"
                        onClick={() => toggleDropdown(key)}
                      >
                        {key}
                      </button>
                      {dropdownsOpen.includes(key) && (
                        <div className="absolute z-10 bg-gray-900 text-white py-2 px-4 mt-1 rounded-md shadow-lg">
                          {renderSubMenu(value)}
                        </div>
                      )}
                    </div>
                  ) : (
                    <p
                      className="cursor-pointer"
                      onClick={() => handleClick(value)}
                    >
                      {value}
                    </p>
                  )}
                </div>
              ))}
          </div>
          <div>
            <div
              className="flex font-semibold relative cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <ShoppingCartOutlinedIcon />
              <p className="absolute left-6 top-2">
                {cartItems.length > 0 ? cartItems.length : ""}
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
