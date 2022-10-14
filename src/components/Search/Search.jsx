import React, { useContext, useState } from "react";
import classes from "./Search.module.css";
import search from "../../assets/icon-search.svg";
import { AppContext } from "../../context/appContext";
import { data } from "../../data/data";

function Search() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const {
    items,
    setItems,
    bookmarkedMovies,
    setBookmarkedMovies,
    bookmarkedSeries,
    setBookmarkedSeries,
    allBookmarked,
    setAllBookmarked,
  } = useContext(AppContext);

  const onChangeHandler = (e) => {
    setSearchInputValue(e.target.value);
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setItems(filtered);
  };
  return (
    <form className={classes.form}>
      <img src={search} alt='search' />
      <input
        type='text'
        placeholder='Search for movies or TV series'
        value={searchInputValue}
        onChange={onChangeHandler}
      />
    </form>
  );
}

export default Search;
