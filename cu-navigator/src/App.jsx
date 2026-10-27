import { campusSpots } from "./campusspots";
import { useState } from "react";
import './App.css';
import { SpotCard } from "./spotCard";

function App(){
  const [selectedCategory,setSelectedCategory] = useState("All")
  const [searchQuery,setSearchQuery]=useState("")
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
        <SpotCard key={spot.id} spot={spot}/>
      ))
      )}
      
     </div>
    </>
  );
}
export default App;