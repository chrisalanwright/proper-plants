export default function PlantList({ plants, addToCart }) {
  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <Plant key={plant.id} plant={plant} addToCart={addToCart} />
      ))}
    </div>
  );
}
