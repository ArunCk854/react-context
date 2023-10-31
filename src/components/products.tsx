"use client";

import { createContext, useContext, useEffect, useState } from "react";
import styles from "./styles/ShopPage.module.css";
import style from "./styles/ProductCard.module.css";
import ProductCard from "./product-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Header from "./header";
import { useLocation } from "react-router-dom";
import { CartContext } from "./cart-context";
import axios from "axios";

export default function Products() {
  const sampleData = [
    {
      id: 1,
      key: 1,
      name: "GFG T-shirt",
      price: 499,
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20230823165506/gfg1.png",
    },
    {
      id: 2,
      key: 2,
      name: "GFG Bag",
      price: 699,
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20230823165553/gfg2.jpg",
    },
    {
      id: 3,
      key: 3,
      name: "GFG Hoodie",
      price: 799,
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20230823165623/gfg3.jpg",
    },
    {
      id: 4,
      key: 4,
      name: "PUBG printed Graphic T-Shirt",
      price: 899,
      image: "https://i.dummyjson.com/data/products/54/thumbnail.jpg",
    },
    {
      id: 5,
      key: 5,
      name: "CFG Digital Watch",
      price: 1299,
      image: "https://i.dummyjson.com/data/products/68/thumbnail.webp",
    },
    {
      id: 7,
      key: 7,
      name: "FOGG Expressio Perfume",
      price: 898,
      image: "https://i.dummyjson.com/data/products/13/thumbnail.webp",
    },
    {
      id: 8,
      key: 8,
      name: "Sparx X",
      price: 799,
      image: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
    },
  ]
  const [cartItem, setCartItem] = useState(0);
  const [productItems, setProductItems] = useState(sampleData);
  const [cartItems, setCartItems] = useContext(CartContext);
  const { state } = useLocation();
  useEffect(() => {
  if(state.cart && state.cart?.length > 0) {
    setCartItems(state.cart)
  }
}, [state?.cart])

  function handleAddToCart(data: any) {
    data.buttonText === "Add to Cart"
      ? setCartItem(cartItem + 1)
      : setCartItem(cartItem - 1);
  }

  useEffect(() => {
    axios("http://localhost:8082/products")
      .then((response: any) =>
        response.data.map((product: any) => ({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          key: product.key
        }))
      )
      .then((data: any) => {
        setProductItems(data);
      });
  }, []);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.cards}>
          {productItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
}
