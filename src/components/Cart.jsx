import CartItem from "./CartItem";

export default function Cart({ cart, updateQuantity }) {
  return (
    <div className="cart">
      <h2>Cart ({cart.length})</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
      ))}
    </div>
  );
}
