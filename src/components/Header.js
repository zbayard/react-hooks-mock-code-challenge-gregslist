import React from "react";
import Search from "./Search";
import NewForm from "./NewForm"

function Header({search, setSearch, handleNewListing}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} setSearch={setSearch} />
      <NewForm handleNewListing={handleNewListing} />
    </header>
  );
}

export default Header;
