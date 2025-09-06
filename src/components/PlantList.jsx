export default function PlantList({ plants }) {
  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <PlantDetails key={plant.id} plant={plant} />
      ))}
    </div>
  );
}
