import React from "react";
import "./styles.css";
import Movie from "./Components/Movie";
export default function App() {
  const [movieList, setMovieList] = React.useState([
    {
      id: 1,
      name: "The Shawshank Redemption",
      rating: 9.2,
      cast: [" Tim Robins", ", ", "Morgan Freeman"]
    },
    {
      id: 2,
      name: "The Godfather",
      rating: 9.1,
      cast: ["AL Pacino", ", ", "Marlon Brando"]
    },
    {
      id: 3,
      name: "The Lord Of the Rings",
      rating: 8.9,
      cast: [" Elijah Wood", ",  ", "  Viggo Mortensen"]
    },
    {
      id: 4,
      name: "The Dark Knight ",
      rating: 8.1,
      cast: [" Christian Bale", " ,", " Heath Ledger"]
    }
  ]);
  const handledelete = (id) => {
    let newMovieList = movieList.filter((movie) => movie.id !== id);
    setMovieList(newMovieList);
  };
  return (
    <div className="Center">
      <div className="Container">
        {movieList.length === 0
          ? `The List is empty`
          : `There are ${movieList.length} items in the list`}
      </div>

      {movieList.length !== 0
        ? movieList.map((movie) => (
            <Movie pro={movie} key={movie.id} onDelete={handledelete} />
          ))
        : null}
    </div>
  );
}
