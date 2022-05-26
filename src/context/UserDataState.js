import UserContext from "./UserContext";
import React, { useState } from "react";

const Userdatastate = (props) => {
  const [Movies, setMovies] = useState("");
  const [Genres, setGenres] = useState("");
  const [Ratings, setRatings] = useState("");

  const collectdata = () => {
    if (Movies === "") {
      const data = JSON.parse(localStorage.getItem("data"));
      if (data) {
        setMovies(data.movie);
        setGenres(data.genre);
        setRatings(data.rating);
      }
    }
  };
  const setlocaldata = () => {
    localStorage.setItem(
      "data",
      JSON.stringify({
        movie: Movies,
        genre: Genres,
        rating: Ratings,
      })
    );
  };
  return (
    <UserContext.Provider
      value={{
        setlocaldata,
        collectdata,
        Movies, 
        setMovies,
        Genres, 
        setGenres,
        Ratings, 
        setRatings,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default Userdatastate;
