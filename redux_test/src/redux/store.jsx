import {configureStore} from "@reduxjs/toolkit"
import CounterReducer from "./features/counter/counterSlice"
import logger from "redux-logger"

const store = configureStore({
    reducer: {
        counter: CounterReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
})

export default store