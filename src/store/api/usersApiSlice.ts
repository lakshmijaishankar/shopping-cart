import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

type CreateUser = {
  body: {
    email: string;
    password: string;
    returnSecureToken?: true | false;
  };
};

type ResponseAfterSignup = {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
};

const usersApi = createApi({
  reducerPath: 'users',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({baseUrl: process.env.FIREBASE_AUTH_URL}),
  endpoints: builder => ({
    createUserWithEmailAndPassword: builder.mutation<
      ResponseAfterSignup,
      CreateUser
    >({
      query: ({body}) => ({
        url: 'signUp',
        method: 'POST',
        params: {
          key: process.env.API_KEY,
        },
        body: body,
      }),
    }),
  }),
});

export default usersApi;

export const {useCreateUserWithEmailAndPasswordMutation} = usersApi;
