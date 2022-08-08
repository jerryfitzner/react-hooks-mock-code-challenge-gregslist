import React, { useState } from "react";

function ListingCard({ listing, onDelete }) {
  const [isFav, setisFav] = useState(false);


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {isFav ? (
          <button className="emoji-button favorite active" onClick={() => setisFav(false)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => setisFav(true)}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={() => onDelete(listing.id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
