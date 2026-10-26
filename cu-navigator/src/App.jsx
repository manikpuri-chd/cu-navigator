import { campusSpots } from "./campusspots";
import './App.css';

function App(){
  return (
    <>
    <div className="name">
      <h1>CU Navigator</h1>
    </div>
    <div className="spots-grid">
      {campusSpots.map((spot)=>(
        <div key={spot.id} clasName="spot-card">
          <h2>{spot.name}</h2>
          <span className="categories">{spot.category}</span>
          <p>{spot.zone}</p>
          <p>{spot.description}</p>
          </div>
      ))}

    </div>
    </>
  );
}
export default App;