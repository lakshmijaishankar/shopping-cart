import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {Product} from '../../types/products';

const productsApi = createApi({
  reducerPath: 'productsApi',
  tagTypes: ['product', 'products'],
  baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com'}),
  endpoints: builder => ({
    getProducts: builder.query<Product[], void>({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
      providesTags: ['products'],
    }),
    getProductById: builder.query<Product, number>({
      query: (id: number) => ({
        url: `/products/${id}`,
        method: 'GET',
      }),
      providesTags: ['product'],
    }),
  }),
});

export default productsApi;
export const {useGetProductsQuery, useGetProductByIdQuery} = productsApi;
