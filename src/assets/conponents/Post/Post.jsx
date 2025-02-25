import React from 'react';

const Post = ({ post }) => {
    console.log(post)
    const { id, title, body } = post;
    return (
        <div>
            <div className='border border-blue-700 rounded-lg p-8'>
                <h3>post id:{id}</h3>
                <h3>post Title:{title}</h3>
                <p>post body: {body}</p>
            </div>
        </div>
    );
};

export default Post;