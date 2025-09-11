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

  const updateQuantity = (plantId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(plantId);
    } else {
      setCart((currentCart) =>
        currentCart.map((item) =>
          item.id === plantId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeFromCart = (plantId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== plantId));
  };
  return (
    <>
      <PlantList plants={PLANTS} addToCart={addToCart} />
      <Cart cart={cart} updateQuantity={updateQuantity} />
    </>
  );
}
