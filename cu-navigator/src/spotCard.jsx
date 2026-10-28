
export function SpotCard({spot,onSelect}){
    return(
          <div className="spot-card" onClick={() => onSelect(spot)}>
            <h2>{spot.name}</h2>
            <span>{spot.category}</span>
            <p>{spot.zone}</p>
            <p>{spot.description}</p>
        </div>
    )
}