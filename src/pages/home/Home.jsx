import React, { useContext } from "react";
import classes from "./Home.module.css";
import { AppContext } from "../../context/appContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import movie_icon from "../../assets/icon-category-movie.svg";
// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";
import Recomended from "../../components/Recomended/Recomended";
import bookmark from "../../assets/icon-bookmark-empty.svg";
import bookmarked from "../../assets/icon-bookmark-full.svg";
function Home() {
  const {
    items,
    setItems,
    allBookmarks,
    setAllBookmarks,
    bookmarkedMovies,
    setBookmarkedMovies,
    bookmarkedSeries,
    setBookmarkedSeries,
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
            console.log("ok");
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

  return (
    <section className={classes.home}>
      <div className={classes.trendings}>
        <h1 className={classes.trending_title}>Trendings</h1>
        <Splide
          className={classes.splide}
          aria-label='My Favorite Images'
          options={{
            rewind: true,
            width: "100%",
            gap: "10px",
            perPage: 2,
            focus: "left",
            arrows: false,
            pagination: false,
            trimSpace: true,
            autoWidth: true,
            breakpoints: {
              768: {
                perPage: 1,
                gap: "10px",

                width: "100%",
              },
              569: {
                perPage: 1,
                gap: "10px",

                width: "100%",
              },
              425: {
                perPage: 1.5,
                gap: "10px",
              },
              400: {
                perPage: 1.2,
                gap: "5px",
              },
            },
          }}>
          {items.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <div className={classes.trending_item_card}>
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
                  <div className={classes.trending_card_info}>
                    <div className={classes.info}>
                      <span>{item.year}</span>
                      <span>.</span>
                      <span>
                        <img
                          src={movie_icon}
                          alt='icon'
                          className={classes.movie_icon}
                        />
                        {"  "}
                        {item.category}
                      </span>{" "}
                      <span>.</span>
                      <span>{item.restriction}</span>
                    </div>
                    <p className={classes.trending_name}>{item.name}</p>
                  </div>
                  <div
                    className={classes.add}
                    onClick={() => addToBookmarks(item)}>
                    <img
                      src={!item.bookmarked ? bookmark : bookmarked}
                      alt=''
                    />
                  </div>
                  <img
                    className={classes.trending_img}
                    src={item.img}
                    alt={item.name}
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <div className={classes.recomended}>
        <h1 className={classes.recomended_title}>Recomended for you</h1>
        <div className={classes.recomended_list}>
          <Recomended />
        </div>
      </div>
    </section>
  );
}

export default Home;
