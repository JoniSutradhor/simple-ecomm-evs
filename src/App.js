// App.js
import React from "react";
import Products from "./components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import store from "./store/store";
import { Provider } from "react-redux";
import { AppProvider } from "./contexts/AppContext";
import CartPage from "./components/CartPage";

const App = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </Provider>
  );
};

export default App;
