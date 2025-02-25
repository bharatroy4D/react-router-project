import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div className='flex justify-center bg-gray-400 p-5 text-black gap-10 list-none'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/section'>Section</Link>
            <Link to='/content'>Content</Link>   
            <Link to='/users'>users</Link>   
            <Link to ='/posts'>posts</Link>
                  
        </div>
    );
};

export default Navber;