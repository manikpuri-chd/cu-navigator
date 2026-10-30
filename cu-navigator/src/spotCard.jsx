
export function SpotCard({spot,onSelect,onSave,isSaved}){
    return(
          <div className="spot-card" onClick={() => onSelect(spot)}>
            <h2>{spot.name}</h2>
            <span className="categories">{spot.category}</span>
            <p>{spot.zone}</p>
            <p>{spot.description}</p>
            <button className={isSaved ? "saved-btn" : ""} onClick={(e)=> {e.stopPropagation() ; onSave(spot)}} >{isSaved ? "Saved 🌟": "Save ⭐"}</button>
            
        </div>
    )
}