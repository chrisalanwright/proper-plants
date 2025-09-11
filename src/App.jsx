import { useState } from "react";
import PLANTS from "./data";
import PlantList from "./components/PlantList";
import Cart from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (plant) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === plant.id);

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...currentCart, { ...plant, quantity: 1 }];
      }
    });
  };
  return (
    <>
      <PlantList plants={PLANTS} addToCart={addToCart} />
      <Cart cart={cart} />
    </>
  );
}
