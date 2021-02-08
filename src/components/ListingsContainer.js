import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, deleteListing}) {

  const listingCards = listings.map(listing => {
    return <ListingCard id={listing.id} key={listing.id} description={listing.description} image={listing.image} location={listing.location} deleteListing={deleteListing} />
  });

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
