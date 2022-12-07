import React, { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fetchTopRatedMovies,
  fetchTopRatedTVShow,
  setWhatsFetching,
  setSearchTerm,
  setSelectedMovie,
  setSelectedTVShow,
} from "../../store/topRatedListActions";

import TabList from "./components/TabList";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import TVShowsList from "./components/TVShowList";

import "./List.css";

export function List() {
  const dispatch = useAppDispatch();
  const movieList = useAppSelector(
    (state) => state.topRatedList.topRatedMovies
  );
  const TVShowList = useAppSelector(
    (state) => state.topRatedList.topRatedTVShow
  );
  const whatsFetching = useAppSelector(
    (state) => state.topRatedList.whatsFetching
  );
  const searchTerm = useAppSelector((state) => state.topRatedList.searchTerm);

  const fetchHandler = useCallback(() => {
      dispatch(fetchTopRatedMovies(searchTerm));
      dispatch(fetchTopRatedTVShow(searchTerm));
  }, [searchTerm, dispatch])

  const handleWhatsFetching = (whatsFetching: any) => {
    dispatch(setWhatsFetching(whatsFetching));
  };

  const handleSelect = (selected: any) => {
    if (whatsFetching === "movies") {
      dispatch(setSelectedMovie(selected));
    }
    if (whatsFetching === "tvshows") {
      dispatch(setSelectedTVShow(selected));
    }
  };

  const handleSetSearchTerm = (searchTerm: string) => {
    dispatch(setSearchTerm(searchTerm))
  }

  const HandleRenderList = () => {
    if (whatsFetching === "movies") {
      return (
        <MovieList movieList={movieList} handleSelectMovie={handleSelect} />
      );
    }

    if (whatsFetching === "tvshows") {
      return (
        <TVShowsList
          tvShowList={TVShowList}
          handleSelectTVShow={handleSelect}
        />
      );
    }

    return null;
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchHandler();
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [fetchHandler]);
  
  return (
    <div className="list-container">
      <TabList handleWhatsFetching={handleWhatsFetching} whatsFetching={whatsFetching} />
      <Search searchTerm={searchTerm} handleSetSearchTerm={handleSetSearchTerm} />
      <HandleRenderList />
    </div>
  );
}
