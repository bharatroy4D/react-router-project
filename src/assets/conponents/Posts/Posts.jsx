import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';


const Posts = () => {
    const posts = useLoaderData();
     console.log(posts);
     
    return (
        <div>
            <h2>post: {posts.length}</h2>
            <div className='grid grid-cols-4 gap-5 mt-5'>
                {
                    posts.map(post =><Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;