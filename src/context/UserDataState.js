import UserContext from "./UserContext";
import React, { useState } from "react";

const Userdatastate = (props) => {
  const [Movies, setMovies] = useState("");
  const [Genres, setGenres] = useState("");
  const [Ratings, setRatings] = useState("");
  const [row,setRow] =useState([]);

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
      "moviedata",
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
        setRow,
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
