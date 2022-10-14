import classes from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import Bookmarked from "./pages/bookmarked/Bookmarked";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import React, { useState } from "react";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className='App'>
      <Router>
        <Container className={classes.app_container}>
          <Navbar />
          <div className={classes.list}>
            <Search />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/movies' element={<Movies />} />
              <Route path='/series' element={<Series />} />
              <Route path='/bookmarked' element={<Bookmarked />} />
            </Routes>
          </div>
        </Container>
      </Router>
    </div>
  );
}

export default App;
