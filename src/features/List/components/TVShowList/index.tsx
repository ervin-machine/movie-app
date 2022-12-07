import React from "react";
import Card from "../Card/index";
import "./TVShowList.css";

interface TVShowsListProps {
  tvShowList: any[];
  handleSelectTVShow: (selected: any) => void;
}

function TVShowsList(props: TVShowsListProps) {
  const { tvShowList, handleSelectTVShow } = props;

  return (
    <div className="tvshow-list-container">
      {tvShowList &&
        tvShowList.map((item: any) => {
          return (
            <div key={item.id}>
              <Card list={item} handleSelect={handleSelectTVShow} />
            </div>
          );
        })}
    </div>
  );
}

export default TVShowsList;
