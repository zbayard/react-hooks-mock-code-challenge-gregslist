import React, {useState} from "react";

function ListingCard({id, key, description, image, location, deleteListing}) {

  const [isFavorite, setIsFavorite] = useState(false)
  

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`,{
      method: 'DELETE'
    });

    deleteListing(id)
  }

  function handleClick(){
    setIsFavorite(isFavorite=> !isFavorite)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div> 
    </li>
  );
}

export default ListingCard;
