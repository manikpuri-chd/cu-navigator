export function SpotCard({spot}){
    return(
          <div key={spot.id} className="spot-card">
          <h2>{spot.name}</h2>
          <span className="categories">{spot.category}</span>
          <p>{spot.zone}</p>
          <p>{spot.description}</p>
          </div>
    )
}