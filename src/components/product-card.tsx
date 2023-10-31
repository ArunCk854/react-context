"use client";
import { useContext, useEffect, useState } from "react";
import styles from "./styles/ProductCard.module.css";
import { CartContext } from "./cart-context";

export default function ProductCard({
  product,
  addToCart,
}: {
  product: any;
  addToCart: any;
}) {
  const [buttonText, setButtonText] = useState("Add to Cart");
  const [buttonClass, setButtonClass] = useState(styles.button);

  const [cartItems, setCartItems] = useContext(CartContext);
  useEffect(() => {
    const ItemIds = cartItems.map((x: any) => x.id);
    console.log(ItemIds, product);
    if (ItemIds.includes(product.id)) {
      setButtonText("Remove");
      setButtonClass(styles.remove_button);
    } else {
      setButtonText("Add to Cart");
      setButtonClass(styles.button);
    }
  }, [cartItems]);
  let list: any[] = cartItems;

  function handleClick(product: any) {
    console.log(product);
    if (buttonText === "Add to Cart") {
      setButtonText("Remove");
      setButtonClass(styles.remove_button);
      addCart(product);
    } else {
      setButtonText("Add to Cart");
      setButtonClass(styles.button);
      removeCart(product);
    }
  }

  function addCart(product: any) {
    list.push(product);
    console.log(list);
    setCartItems(list);
  }

  function removeCart(product: any) {
    list = list.filter((x) => x.id !== product.id);
    console.log(list);
    setCartItems(list);
  }

  return (
    <div style={{ paddingTop: "5px" }} className={styles.card}>
      <img src={product.image} height={300} width={220} />
      <h4 className={styles.title}>{product.name}</h4>
      <p>₹ {product.price}</p>
      <button
        className={buttonClass}
        onClick={() => {
          handleClick(product);
          addToCart({ product, buttonText });
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}
