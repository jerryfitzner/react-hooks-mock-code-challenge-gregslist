import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(item => setListings(item))
  },[]);

  const onDelete = (id) => {
    console.log(id)
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    });
    const newList = listings.filter((listing) => listing.id !== id);
    setListings(newList);
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={ listings } onDelete={onDelete}/>
    </div>
  );
}

export default App;
