import React, { useContext, useEffect, useState } from "react";
import classes from "./MovieCard.module.css";
import movie_icon from "../../assets/icon-category-movie.svg";
import bookmark from "../../assets/icon-bookmark-empty.svg";
import bookmarked from "../../assets/icon-bookmark-full.svg";

import { AppContext } from "../../context/appContext";

function MovieCard({ ...item }) {
  const {
    bookmarkedMovies,
    setBookmarkedMovies,
    bookmarkedSeries,
    setBookmarkedSeries,
    allBookmarks,
    setAllBookmarks,
    items,
    setItems,
  } = useContext(AppContext);

  const addToBookmarks = (item) => {
    const alreadyInBookmarks = allBookmarks.find(
      (movie) => movie.id === item.id
    );
    if (!alreadyInBookmarks) {
      setItems(
        items.map((movie) => {
          console.log(movie.id, item.id);
          if (movie.id == item.id) {
            movie.bookmarked = !movie.bookmarked;
          }
          return movie;
        })
      );
      setAllBookmarks([...allBookmarks, item]);
    }

    if (!alreadyInBookmarks && item.category === "Movie") {
      setBookmarkedMovies([...bookmarkedMovies, item]);
    } else if (!alreadyInBookmarks && item.category === "TVseries") {
      setBookmarkedSeries([...bookmarkedSeries, item]);
    }

    if (alreadyInBookmarks) {
      setAllBookmarks(allBookmarks.filter((movie) => movie.id !== item.id));

      setBookmarkedMovies(
        bookmarkedMovies.filter((movie) => movie.id !== item.id)
      );
      setBookmarkedSeries(
        bookmarkedSeries.filter((movie) => movie.id !== item.id)
      );
      setItems(
        items.map((movie) => {
          if (movie.id === item.id) {
            movie.bookmarked = false;
          }
          return movie;
        })
      );
    }
  };

  useEffect(() => {
    setBookmarkedMovies(
      bookmarkedMovies.map((movie) => {
        movie.bookmarked = true;
        return movie;
      })
    );
    setBookmarkedSeries(
      bookmarkedSeries.map((movie) => {
        movie.bookmarked = true;
        return movie;
      })
    );
  }, []);

  return (
    <div className={classes.recomended_item_card}>
      <div className={classes.play_cont}>
        <svg
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M0 15C0 6.7125 6.7125 0 15 0C23.2875 0 30 6.7125 30 15C30 23.2875 23.2875 30 15 30C6.7125 30 0 23.2875 0 15ZM21 14.5L12 8V21L21 14.5Z'
            fill='black'
          />
        </svg>

        <span className={classes.play}>Play</span>
      </div>
      <div className={classes.add} onClick={() => addToBookmarks(item)}>
        <img src={!item.bookmarked ? bookmark : bookmarked} alt='icon2' />
      </div>
      <div className={classes.item_img}>
        <img src={item.img} alt={item.name} />
      </div>
      <div className={classes.item_info}>
        <span>{item.year}</span>
        <span>.</span>
        <span>
          <img src={movie_icon} alt='icon' className={classes.movie_icon} />
          {"  "}
          {item.category}
        </span>{" "}
        <span>.</span>
        <span>{item.restriction}</span>
      </div>
      <p className={classes.name}>{item.name}</p>
    </div>
  );
}

export default MovieCard;
