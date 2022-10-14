import React, { useContext, useEffect } from "react";
import classes from "./Bookmarked.module.css";
import { AppContext } from "../../context/appContext";
import MovieCard from "../../components/MovieCard/MovieCard";

function Bookmarked() {
  const { bookmarkedMovies, bookmarkedSeries } = useContext(AppContext);

  return (
    <section className={classes.bookmarks}>
      <div className={classes.movie_bookmarks}>
        <p className={classes.movie_bookmarks_title}>Bookmarked Movies</p>
        <div className={classes.movie_bookmarks_list}>
          {bookmarkedMovies.length > 0 ? (
            bookmarkedMovies.map((item, index) => {
              return <MovieCard key={item.id} {...item} />;
            })
          ) : (
            <p className={classes.no_bookmarks}>No bookmarks</p>
          )}
        </div>
      </div>

      {/* ////////////////////////////////////////// */}
      <div className={classes.movie_bookmarks}>
        <p className={classes.movie_bookmarks_title}>Bookmarked TV series</p>
        <div className={classes.movie_bookmarks_list}>
          {bookmarkedSeries.length > 0 ? (
            bookmarkedSeries.map((item, index) => {
              return <MovieCard key={item.id} {...item} />;
            })
          ) : (
            <p className={classes.no_bookmarks}>No bookmarks</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Bookmarked;
