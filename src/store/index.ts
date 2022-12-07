import {configureStore} from '@reduxjs/toolkit';
import topRatedListSlice from './topRatedListSlice'

const store=configureStore(
    {
        reducer:{topRatedList:topRatedListSlice.reducer}
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch
export default store;