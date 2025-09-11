export default function CartItem({ item, updateQuantity }) {
  return (
    <div className="cart-item">
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
  );
}
