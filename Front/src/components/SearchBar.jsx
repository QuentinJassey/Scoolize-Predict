
import React, {useState} from 'react'


const SearchBar = () => {
const [searchInput, setSearchInput] = useState("");
const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  if (searchInput.length > 0) {
      formations.filter((formation) => {
      return formation.name.match(searchInput);
  });
  }
return <input
   type="search"
   placeholder="Rechercher une formation"
   onChange={handleChange}
   value={searchInput} />
}

export default SearchBar