import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api_url } from '../firebase/datos'

export const expoApi = createApi({
    reducerPath: 'expoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: api_url,
    }),

    endpoints: (builder) => ({
        getCategorias: builder.query({
            query: ()=> 'categorias.json'
        }),

        getProductos: builder.query({
            query: ()=> 'productos.json'
        }),
        
        getImagen: builder.query({
            query: ()=> 'image.json'
        }),

        putImagen: builder.mutation({
            query: (image) => ({
                url: "image.json",
                method: 'PUT',
                body: image
            })
        })
    }),
});

export const { 
    useGetCategoriasQuery, 
    useGetProductosQuery, 
    useGetImagenQuery, 
    usePutImagenMutation 
} = expoApi;
