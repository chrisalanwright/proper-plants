export default function Plant({ plant, addToCart }) {
  return (
    <div className="plant">
      <h3>{plant.name}</h3>
      <span>{plant.image}</span>
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </div>
  );
}
