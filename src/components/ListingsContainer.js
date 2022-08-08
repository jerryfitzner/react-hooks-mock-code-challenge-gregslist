import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {
  const cards = listings.map((listing) => (
    <ListingCard listing={listing} onDelete={onDelete}/>
  ))

  return (
    <main>
      <ul className="cards">
        {cards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
