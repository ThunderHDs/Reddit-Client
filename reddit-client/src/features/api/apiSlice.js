import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//Defining our API slice
export const redditApi = createApi({
    reducerPath: 'redditApi', //Reducer's name into the store
    baseQuery: fetchBaseQuery({ baseUrl: '/'}), //API's URL base, using proxy to avoid CORS issues
    endpoints: (builder) => ({
        //Endpoint to obtain subreddit feed
        getFeed: builder.query({
            query: (subreddit = 'popular') => `/${subreddit}.json`,
            //Transformming the response to keep just with the important data
            transformResponse: (response) => {
                return response.data.children.map(post => ({
                    id: post.data.id,
                    title: post.data.title,
                    author: post.data.author,
                    subreddit: post.data.subreddit_name_prefixed,
                    timeAgo: new Date(post.data.created_utc * 1000).toLocaleDateString(), // Simplified format, could be better
                    upvotes: post.data.ups,
                    downvotes: post.data.downs,
                    comments: post.data.num_comments,
                    imageUrl: post.data.url,
                    content: post.data.selftext,
                }));
            },}),
        getPostDetails: builder.query({
            query: (postId) => `/comments/${postId}.json`,
            transformResponse: (response) => {
                const postData = response[0].data.children[0].data;
                const commentsData = response[1].data.children;

                const post = {
                    id: postData.id,
                    title: postData.title,
                    author: postData.author,
                    content: postData.selftext,
                    imageUrl: postData.url,
                    upvotes: postData.ups,
                    downvotes: postData.downs,
                };

                const comments = commentsData.map(comment => ({
                    id: comment.data.id,
                    author: comment.data.author,
                    body: comment.data.body,
                    upvotes: comment.data.ups,
                    downvotes: comment.data.downs,
                })).filter(comment=>comment.author);
                
                console.log("comments", comments)
                console.log("post", post)


                return { post, comments };
            }}),
    }),
});

export const { useGetFeedQuery, useGetPostDetailsQuery } = redditApi;