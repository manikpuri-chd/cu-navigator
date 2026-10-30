import { campusSpots } from "./campusspots";
import { useState } from "react";
import './App.css';
import { SpotCard } from "./spotCard";

function App(){
  const categories=[
    "All",
    "Academic",
    "Student Services",
     "Food",
      "Cafe",
       "Sports",
        "Hangout Spots"
  ]
  const [selectedCategory,setSelectedCategory] = useState("All")
  const [searchQuery,setSearchQuery]=useState("")
  const [selectedSpots,setSelectedSpots]=useState(null)
  const [savedSpots,setSavedSpots]=useState([])
  
  function toggleSaveSpots(spot){
    const isAlreadySaved = savedSpots.some((item)=> item.id===spot.id)
    if(isAlreadySaved){
      setSavedSpots(savedSpots.filter((item)=>item.id !== spot.id))
    }
    else{
      setSavedSpots([...savedSpots,spot])
    }
    
  }

  const filteredSpots = campusSpots.filter((spot)=>{
    const  isSpotSaved = savedSpots.some((item)=>item.id===spot.id)
    const matchesCategory = selectedCategory === "All" || spot.category === selectedCategory || (selectedCategory==="Saved" && isSpotSaved);
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
       <p className="results-count" style={{ textAlign: "center", color: "#94a3b8", marginBottom: "12px" }}>Showing {filteredSpots.length} of {campusSpots.length} campus spots</p>
    <div className="filter-bar">
     

      <button clasName="saves"
      onClick={()=>{setSelectedCategory("Saved")}}
        className={selectedCategory === "Saved" ? "active-btn" : ""}
      > Saved ({savedSpots.length}) </button>

    {categories.map((category)=>(
      <button key={category} className={selectedCategory===category?"active-btn":""}
      onClick={()=>setSelectedCategory(category)}>{category}</button>
    ))}
    
 {(selectedCategory !== "All" || searchQuery !== "")&&(
      <button className="Reset-Filter"
      onClick={()=>{setSelectedCategory("All") ; setSearchQuery("")}}
      > Reset Filter </button>
  )}
  
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
        onSelect={setSelectedSpots}
        onSave={toggleSaveSpots}/>
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