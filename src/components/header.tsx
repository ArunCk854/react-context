"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { CartContext } from "./cart-context";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleButtonClick = (cartItems: any) => {
    navigate("/carts", { state: { cart: cartItems } });
  };
  const [cartItems, setCartItems] = useContext(CartContext);
  let totalItems = 0;
  if (cartItems !== undefined) {
    totalItems = cartItems.length;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "50px",
        background: "#607D8B",
      }}
    >
      <div style={{ width: "90%", paddingTop: "10px", paddingLeft: "10px" }}>
        {/* <span>Shopping Cart</span> */}
      </div>

      <div
        onClick={() => {
          handleButtonClick(cartItems);
        }}
        style={{ paddingTop: "10px", paddingLeft: "10px", cursor: "pointer" }}
      >
        <FontAwesomeIcon
          style={{ width: "30px", height: "30px", position: "absolute" }}
          icon={faShoppingCart}
        />
        <div
          style={{
            marginLeft: "29px",
            marginTop: -"10px",
            borderRadius: "9px",
            background: "red",
            width: "20px",
            height: "20px",
            textAlign: "center",
            color: "white",
          }}
        >
          {totalItems}
        </div>
      </div>
    </div>
  );
};

export default Header;
