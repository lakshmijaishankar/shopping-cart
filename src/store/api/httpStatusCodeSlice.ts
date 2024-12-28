import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const httpStatusCodeApi = createApi({
  reducerPath: 'httpStatusCode',
  tagTypes: ['statusCode'],
  baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com'}),
  endpoints: builder => ({
    httpStatusCode: builder.query<number | undefined, void>({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
      transformResponse(_, meta) {
        return meta?.response?.status;
      },
    }),
  }),
});

export default httpStatusCodeApi;
export const {useHttpStatusCodeQuery} = httpStatusCodeApi;
