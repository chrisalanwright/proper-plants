export default function Cart({ cart, updateQuantity }) {
  return (
    <div className="cart">
      <h2>Cart ({cart.length})</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <span>{item.image}</span>
          <span>{item.name}</span>
          <span>Qty: {item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            +
          </button>
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
            -
          </button>
        </div>
      ))}
    </div>
  );
}
