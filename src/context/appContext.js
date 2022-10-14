import React, { useState, useContext, createContext } from "react";
import { data } from "../data/data";
export const AppContext = createContext();

export const ContextProvider = (props) => {
  const [activePage, setActivePage] = useState("home");
  const [items, setItems] = useState(data);
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  const [bookmarkedSeries, setBookmarkedSeries] = useState([]);
  const [allBookmarks, setAllBookmarks] = useState([]);

  return (
    <AppContext.Provider
      value={{
        activePage,
        setActivePage,
        items,
        setItems,
        bookmarkedMovies,
        setBookmarkedMovies,
        bookmarkedSeries,
        setBookmarkedSeries,
        allBookmarks,
        setAllBookmarks,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};
