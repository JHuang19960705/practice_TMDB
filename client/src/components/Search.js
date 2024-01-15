import React from 'react'

export const Search = ({search, setInput}) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  }
  return (
    <div className="search">
      <span>Search</span>
      <input type="text" className='input' onChange={inputHandler} />
      <button onClick={search}>Search</button>
    </div>
  )
}


export default Search;