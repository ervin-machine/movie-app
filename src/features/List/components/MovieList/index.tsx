import React from "react";
import Card from "../Card/index";
import "./movieList.css";

interface MovieListProps {
  movieList: any[];
  handleSelectMovie: (selected: any) => void;
}

function MovieList(props: MovieListProps) {
  const { movieList, handleSelectMovie } = props;
  return (
    <div className="movie-list-container">
      {movieList &&
        movieList.map((item: any) => {
          return (
            <div key={item.id}>
              <Card list={item} handleSelect={handleSelectMovie} />
            </div>
          );
        })}
    </div>
  );
}

export default MovieList;
