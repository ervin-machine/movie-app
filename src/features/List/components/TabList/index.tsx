import React from "react";
import Tab from "../Tab";

interface TabListProps {
  handleWhatsFetching: (whatsFetching: any) => void;
  whatsFetching: string;
}


function TabList(props: TabListProps) {
  return (
    <div>
      <div className="tab-list">
        <Tab name="movies" title="Movies"  handleWhatsFetching={props.handleWhatsFetching} whatsFetching={props.whatsFetching}/>
        <Tab name="tvshows" title="TV Shows" handleWhatsFetching={props.handleWhatsFetching} whatsFetching={props.whatsFetching} />
      </div>
      <hr />
    </div>
  );
}

export default TabList;
