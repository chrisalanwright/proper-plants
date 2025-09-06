import { useState } from "react";
import { plants } from "./data";
import PlantList from "./components/PlantList";
import PlantDetails from "./components/PlantDetails";

export default function App() {
  const [plants] = useState(plants);
  const [selectedPlant, setSelectedPlant] = useState();
  if (!selectedPlant) {
    return <div>Please select a plant to learn more.</div>;
  }
  return (
    <>
      <PlantList
        plants={plants}
        selectedPlant={selectedPlant}
        setSelectedPlant={setSelectedPlant}
      />
      <PlantDetails plant={selectedPlant} />
    </>
  );
}
