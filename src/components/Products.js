import React, { useEffect, useState } from "react";
import Product from "./Product";
import Menu from "./Menu";

export default function Products() {
  const [products, setProducts] = useState({});
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const response = await fetch(
        "https://epicvirtualsolution.com/linkskill/api/frontend.php"
      );
      const data = await response.json();
      setProducts(data.MobileList);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };
  return (
    <div>
      <Menu />
      <div className="flex justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products &&
            Object.keys(products).map((key) => (
              <Product key={key} item={products[key]} />
            ))}
        </div>
      </div>
    </div>
  );
}
