import { campusSpots } from "./campusspots";
import { useState } from "react";
import './App.css';
import { SpotCard } from "./spotCard";

function App(){
  const [selectedCategory,setSelectedCategory] = useState("All")
  const [searchQuery,setSearchQuery]=useState("")
  const [selectedSpots,setSelectedSpots]=useState("All")
  const filteredSpots = campusSpots.filter((spot)=>{
    const matchesCategory = selectedCategory === "All" || spot.category === selectedCategory;
    const matchesSearch = spot.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch ;
  });
  return (
    <>
    <div className="Headings">
    <div className="name">
    <h1>CU Navigator</h1>
    </div>
    <input 
    className="search-spots"
    type="text"
    placeholder="search spots...."
    value={searchQuery}
    onChange={(e)=>setSearchQuery(e.target.value)}
    />
    
    <div className="filter-bar">
      <p className="results-count">Showing {filteredSpots.length} of {campusSpots.length} campus spots</p>
    <button className={selectedCategory==="All"?"active-btn":""}
    onClick={()=>setSelectedCategory("All")}>All</button>
    <button className={selectedCategory==="Academic"?"active-btn":""}
    onClick={()=>setSelectedCategory("Academic")}>Academic</button>
    <button className={selectedCategory==="Hangout Spots"?"active-btn":""}
    onClick={()=>setSelectedCategory("Hangout Spots")}>Hangout Spots</button>
    </div>
    </div>
    <div className="spots-grid">
      {filteredSpots.length ===0 ?(
        <div className="no-results">
        <p >no results</p>
        </div>
      ):(
        filteredSpots.map((spot)=>(
        <SpotCard 
        key={spot.id} 
        spot={spot}
        onSelect={setSelectedSpots}/>
      ))
      )}
      
     </div>
     {selectedSpots &&(
      <div className="spot-overlay">
        <div className="spot-box">
          <h2>{selectedSpots.name}</h2>
          <span>{selectedSpots.category}</span>
            <p>{selectedSpots.zone}</p>
          <p>{selectedSpots.description}</p>
          
          <button onClick={() =>  setSelectedSpots(null)} >Close</button>
        </div>
      </div>
     )}
    </>
  );
}
export default App;