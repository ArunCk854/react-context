import { useContext, useEffect, useState } from "react";
import { CartContext } from "./cart-context";
import { useLocation, useNavigate } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const Carts = () => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const { state } = useLocation();
  const navigate = useNavigate();
  const [cartItem, setCartItem] = useState(state.cart);

  useEffect(() => {
    setCartItem(state.cart);
  }, [state]);

  function removeItem(item: any) {
    const list = cartItem.filter((x: any) => x.id !== item.id);
    setCartItem(list);
  }
  const handleBackButtonClick = () => {
    navigate("/", { state: { cart: cartItem } });
  };
  return (
    <div style={{ margin: "auto", width: "100%" }}>
      <div
        style={{
          background: "#607D8B",
          marginLeft: "20px",
          width: "100%",
          height: "50px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <button style={{ display: "flex" }} onClick={handleBackButtonClick}>
          <FontAwesomeIcon
            style={{ marginRight: "10px", height: "30px", width: "30px" }}
            icon={faArrowLeft}
          />
          <h2 style={{ width: "50px", height: "50px", marginTop: "5px" }}>
            Back
          </h2>
        </button>
        <h1 style={{ width: "100%", marginLeft: "40%", marginTop: "0px" }}>
          Shopping Cart
        </h1>
      </div>
      <div>
        <table
          style={{
            background: "#b9b9b9",
            marginTop: "20px",
            marginLeft: "20px",
            width: "100%",
            marginRight: "20px",
          }}
        >
          <thead style={{ background: "#ffffff" }}>
            <tr>
              <th style={{ width: "20%" }}></th>
              <th style={{ width: "50%" }}>Product</th>
              <th style={{ width: "10%" }}>Price (₹)</th>
              <th style={{ width: "10%" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItem.length > 0 ? (
              cartItem.map((item: any) => (
                <tr key={item.id}>
                  <td>
                    <img
                      style={{ width: "150px", height: "150px" }}
                      src={item.image}
                      alt={item.title}
                    />
                  </td>
                  <td align="left">{item.name}</td>
                  <td align="center">{item.price}</td>
                  <td>
                    <IconButton
                      style={{ color: "#e33838", marginLeft: "36%" }}
                      aria-label="delete"
                      onClick={() => removeItem(item)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>No Users</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Carts;
