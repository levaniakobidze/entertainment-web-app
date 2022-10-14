import React, { useContext } from "react";
import classes from "./Series.module.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import { AppContext } from "../../context/appContext";
function Series() {
  const { items } = useContext(AppContext);
  return (
    <section className={classes.series}>
      {items
        .filter((item) => item.category === "TVseries")
        .map((item, index) => {
          return <MovieCard key={index} {...item} />;
        })}
    </section>
  );
}

export default Series;
