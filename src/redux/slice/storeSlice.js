import { createSlice } from "@reduxjs/toolkit";
import { categorias } from "../../datos/categorias";
import { productos } from "../../datos/productos";
import { useGetCategoriasQuery } from "../../servicios/expoApi";

const storeSlice = createSlice({
    name: 'storeSlice',
    initialState: {
        categoriasStore: categorias,
        productosStore: productos,
        categoriaSeleccionada: "",
        productosFiltrados: [],
        productoSeleccionado: {},
    },
    reducers: {
        setCategoria: (state, action) => {
            state.categoriaSeleccionada = action.payload;
            state.productosFiltrados = state.productosStore.filter(
                (e) => e.categoria === state.categoriaSeleccionada
            );
        },

        setProductoSeleccionado: (state, action) => {
            state.productoSeleccionado = action.payload;
        } 
    },
})
export const { setCategoria } = storeSlice.actions;
export default storeSlice.reducer;