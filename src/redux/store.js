import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./slice/storeSlice";
import { expoApi } from "../servicios/expoApi";
import  autSlice  from "./slice/autSlice";
//Cuidado al momoento de importar los Slice, si lo hago con llaves los mismo no funcionan despues.

export const store = configureStore({
    reducer: {
        storeSlice,
        [expoApi.reducerPath]: expoApi.reducer,
        autSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(expoApi.middleware)
})