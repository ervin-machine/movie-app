import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import noImage from "../../../../assets/images/no-image.png"

interface CardProps {
  list: any;
  handleSelect: (selected: any) => void;
}

function Card(props: CardProps) {
  const { list, handleSelect } = props;
  const cardImage = list.backdrop_path !== null ? `http://image.tmdb.org/t/p/w500${list.backdrop_path}` : noImage

  return (
    <div className="card-container" onClick={() => handleSelect(list)}>
      <Link to={`/${list.id}`}>
        <div className="card-details">
          <img
            className={list.backdrop_path !== null ? "card-img" : "no-image"}
            src={cardImage}
            alt=""
          />
          <p className="card-title">{list.title || list.name}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
