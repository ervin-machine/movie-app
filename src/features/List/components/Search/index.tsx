import React from 'react'
import "./Search.css"

interface SearchProps {
  searchTerm: string;
  handleSetSearchTerm: (searchTerm: string) => void;
}

function Search(props: SearchProps) {
  const { searchTerm, handleSetSearchTerm } = props;

  const handleSearchInput = (e: any) => {
    handleSetSearchTerm(e.target.value)
  }

  return (
    <div>
        <input className='search-input' value={searchTerm} onChange={handleSearchInput} placeholder='Search for a movie/TV Show ...' />
    </div>
  )
}

export default Search