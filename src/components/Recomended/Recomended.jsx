import React, { Fragment, useContext } from "react";
import { AppContext } from "../../context/appContext";
import MovieCard from "../MovieCard/MovieCard";

function Recomended() {
  const { items } = useContext(AppContext);
  return (
    <Fragment>
      {items.map((item, index) => {
        return <MovieCard key={index} {...item} />;
      })}
    </Fragment>
  );
}

export default Recomended;
