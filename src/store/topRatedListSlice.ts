
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialState:any={
    topRatedMovies:[],
    topRatedTVShow: [],
    whatsFetching: "tvshows",
    searchTerm: "",
    selectedMovie: {},
    selectedTVShow: {},
}

const topRatedListSlice=createSlice({
    name:'TopRatedList',
    initialState:initialState,
    reducers:{
        setTopRatedMovies(state,action:PayloadAction<any[]>){
            state.topRatedMovies=action.payload;
        },
        setTopRatedTVShows(state,action:PayloadAction<any[]>){
            state.topRatedTVShow=action.payload;
        },
        setWhatsFetching(state,action:PayloadAction<string>){
            state.whatsFetching=action.payload;
        },
        setSearchTerm(state,action:PayloadAction<string>){
            state.searchTerm=action.payload;
        },
        setSelectedMovie(state,action:PayloadAction<any>){
            state.selectedMovie=action.payload;
        },
        setSelectedTVShow(state,action:PayloadAction<any>){
            state.selectedTVShow=action.payload;
        }
    }
})
export default topRatedListSlice;