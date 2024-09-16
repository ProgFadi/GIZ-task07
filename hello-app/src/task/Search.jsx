import React from "react";
import style from './search.module.css';
import { useState } from "react";
const Search = ({searchPrice}) => {
    const [search,setSearch] = useState("")
    const searchHanderd = (e) =>{
        setSearch(e.target.value)
        searchPrice(e.target.value)
    }
  return(
    <input type="text" 
    placeholder="Search"
    value={search}
    onChange={searchHanderd}
    />
  )
}
export default Search;