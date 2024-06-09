/* eslint-disable no-unused-vars */
import { useState } from "react";
import SearchBar from '../Searchbar/SearchBar';
import ProfileInfo from '../cards/ProfileInfo'
import {useNavigate} from "react-router-dom"

const Navbar = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const Navigate = useNavigate;

  const onLogout = () => {
    Navigate('/login');
  };

  const handleSearch = () => {
    
  };

  const onClearSearch = () => {
    setSearchQuery("")
  }

  return (
		<div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
			<h2 className="text-xl font-medium text-black py-2">Dabs Note</h2>

      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value)
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

			<ProfileInfo onLogout={onLogout} />
		</div>
	);
}

export default Navbar