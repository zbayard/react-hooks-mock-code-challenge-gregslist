import React, {useState} from "react";

function Search({search, setSearch}) {

  const [descriptionSearch, setDescriptionSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(descriptionSearch);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={descriptionSearch}
        onChange={(e) => setDescriptionSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
