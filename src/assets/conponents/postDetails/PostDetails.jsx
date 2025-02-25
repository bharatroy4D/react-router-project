import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title} = post;

    return (
        <div>
            <h1>postDetails id:{id} </h1>
            <h2>post detail title:{title}</h2>
        </div>
    );
};

export default PostDetails;