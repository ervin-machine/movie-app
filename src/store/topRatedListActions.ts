import topRatedListSlice from './topRatedListSlice'
import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import {RootState} from './index'
import topRatedListService from '../features/List/services/topRatedListService'

export const topRatedListActions=topRatedListSlice.actions

export const fetchTopRatedMovies=(data: string):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
            if(getState().topRatedList.searchTerm.length < 3){    
                const response: any=await topRatedListService.getTopRatedMovies();
                dispatch(topRatedListActions.setTopRatedMovies(response.results.slice(10)))
            }
            if(getState().topRatedList.searchTerm.length >= 3){    
                const response: any=await topRatedListService.getSearchedMovies(data);
                dispatch(topRatedListActions.setTopRatedMovies(response.results))
            }
    }
}

export const fetchTopRatedTVShow=(data: string):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
            if(getState().topRatedList.searchTerm.length < 3){    
                const response: any=await topRatedListService.getTopRatedTVShow();
                dispatch(topRatedListActions.setTopRatedTVShows(response.results.slice(10)))
            }
            if(getState().topRatedList.searchTerm.length >= 3){    
                const response: any=await topRatedListService.getSearchedTVShows(data);
                dispatch(topRatedListActions.setTopRatedTVShows(response.results))
            }
    }
}

export const setWhatsFetching=(data: string):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch)=>{
                dispatch(topRatedListActions.setWhatsFetching(data))
    }
}

export const setSearchTerm=(data: string):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch)=>{
                dispatch(topRatedListActions.setSearchTerm(data))
    }
}

export const setSelectedMovie=(data: any):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch)=>{
                dispatch(topRatedListActions.setSelectedMovie(data))
    }
}

export const setSelectedTVShow=(data: any):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch)=>{
                dispatch(topRatedListActions.setSelectedTVShow(data))
    }
}