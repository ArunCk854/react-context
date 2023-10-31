import "./App.css";
import Shop from "./components/shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carts from "./components/carts";
import { CartProvider } from "./components/cart-context";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/carts" element={<Carts />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
