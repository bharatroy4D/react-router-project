import { Button } from 'antd';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Post = ({ post }) => {
    const { id, title, body } = post;

    // Initialize AOS inside the component
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Smooth effect
            once: true, // Ensures animation runs only once per scroll
        });
    }, []);

    return (
        <div
            data-aos="fade-right"
            className='w-64 h-64 border border-blue-700 rounded-lg p-3 flex flex-col justify-between shadow-lg'
        >
            <div>
                <h3 className='font-bold'>Post ID: {id}</h3>
                <h3 className='font-semibold text-left'>Title: {title}</h3>
                <p className='text-left overflow-hidden text-ellipsis line-clamp-3'>
                    {body}
                </p>
            </div>

            <Link className='text-blue-800 font-medium' to={`/post/${id}`}>
                Post details
            </Link>

            <Button type="dashed">
                Solid
            </Button>
        </div>
    );
};

export default Post;
