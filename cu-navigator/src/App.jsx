import { campusSpots } from "./campusspots";
import { useState } from "react";
import './App.css';

function App(){
  const [selectedCategory,setSelectedCategory] = useState("All")
  const filteredSpots = campusSpots.filter((spot)=>{
    if (selectedCategory === "All"){
      return true;
    }
    return spot.category ===selectedCategory;
  });
  return (
    <>
    <div className="name">
    <h1>CU Navigator</h1>
    </div>
    <div className="filter-bar">
    <button onClick={()=>setSelectedCategory("All")}>All</button>
    <button onClick={()=>setSelectedCategory("Academic")}>Academic</button>
    <button onClick={()=>setSelectedCategory("Hangout Spots")}>Hangout Spots</button>
    </div>

    
    <div className="spots-grid">
      {filteredSpots.map((spot)=>(
        <div key={spot.id} className="spot-card">
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