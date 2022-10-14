import React, { useContext } from "react";
import classes from "./Movies.module.css";
import { AppContext } from "../../context/appContext";
import MovieCard from "../../components/MovieCard/MovieCard";
function Movies() {
  const { items } = useContext(AppContext);
  return (
    <section className={classes.movies}>
      {items
        .filter((item) => item.category === "Movie")
        .map((item, index) => {
          return <MovieCard key={index} {...item} />;
        })}
    </section>
  );
}

export default Movies;
