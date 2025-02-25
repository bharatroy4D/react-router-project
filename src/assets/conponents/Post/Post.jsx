import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    console.log(post)
    const { id, title, body } = post;
    return (
        <div>
            <div className='border border-blue-700 rounded-lg p-8'>
                <h3>post id:{id}</h3>
                <h3>post Title:{title}</h3>
                <p>post body: {body}</p>
                <Link className='text-blue-800' to={`/post/${id}`}>Post details</Link>
            </div>
        </div>
    );
};

export default Post;