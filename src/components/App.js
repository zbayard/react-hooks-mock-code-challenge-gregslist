import React,{useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  const filteredListings = listings.filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase()));

  function deleteListing(id){
    const updatedListings = listings.filter((listing) => listing.id !== id);
    setListings(updatedListings)

  }

  useEffect(()=> {
    fetch('http://localhost:6001/listings')
    .then(res=>res.json())
    .then(data=> setListings(data))
  }, [])

  

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <ListingsContainer listings={filteredListings} deleteListing={deleteListing} />
    </div>
  );
}

export default App;
