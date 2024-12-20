import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4800' }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => ({
        url:"/movies"
      }),
    }),
    getarts: builder.query({
      query: () => ({
        url:"/arts"
      }),
    }),
    getEvents: builder.query({
      query: () => ({
        url:"/events"
      }),
    }),
    getdetails: builder.query({
      query: (id) => ({
        url:`/${id}`,
        method:'GET'
      }),
    }),
    geteventdetails: builder.query({
      query: (id) => ({
        url:`/events/${id}`,
        method:'GET'
      }),
    }),
    getartsdetails: builder.query({
      query: (id) => ({
        url:`/arts/${id}`,
        method:'GET'
      }),
    }),
    Singup: builder.mutation({
      query: (user) => ({
        url: `/singup`,
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(user),
      }),
    }),
    addarts: builder.mutation({
      query: (user) => ({
        url: `/addarts`,
        method: 'POST',
        body:JSON.stringify(user),
      }),
    }),
    login: builder.mutation({
      query: (user) => ({
        url: `/login`,
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(user),
      }),
    }),
  })
  })
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {  useGetMoviesQuery,
                useGetartsQuery,
                useGetEventsQuery,
                useGetartsdetailsQuery,
                useGetdetailsQuery,
                useGeteventdetailsQuery,
                useLoginMutation,
                useAddartsMutation,
                useSingupMutation} = usersApi