import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import "./ViewPage.css";
import noImage from "../../assets/images/no-image.png"

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ViewPage() {
  const selectedMovie = useAppSelector(
    (state) => state.topRatedList.selectedMovie
  );
  const selectedTVShow = useAppSelector(
    (state) => state.topRatedList.selectedTVShow
  );
  const whatsFetching = useAppSelector(
    (state) => state.topRatedList.whatsFetching
  );

  const selected = whatsFetching === "movies" ? selectedMovie : selectedTVShow;
  const selectedImage = selected.backdrop_path === null ? noImage : `http://image.tmdb.org/t/p/w500${selected.backdrop_path}`

  return (
    <div className="view-page-container">
      <Link to="/">
        <div className="back-content">
          <ArrowBackIcon />
          <p className="back-text">back</p>
        </div>
      </Link>
      <div className="view-page-content">
        <img className="view-page-img" src={selectedImage} alt="" />
        <p>{selected.title || selected.name}</p>
        <p className="view-page-overview">{selected.overview}</p>
      </div>
    </div>
  );
}

export default ViewPage;
