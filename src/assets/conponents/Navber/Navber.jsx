import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div className='flex justify-center bg-gray-400 p-5 text-black gap-10 list-none'>
            <Link className='hover:bg-blue-400 py-1 px-3 rounded-md' to='/'>Home</Link>
            <Link className='hover:bg-blue-400 py-1 px-3 rounded-md' to='/about'>About</Link>
            <Link className='hover:bg-blue-400 py-1 px-3 rounded-md' to='/section'>Section</Link>
            <Link className='hover:bg-blue-400 py-1 px-3 rounded-md' to='/content'>Content</Link>   
            <Link className='hover:bg-blue-400 py-1 px-3 rounded-md' to='/users'>users</Link>     
            <Link className='hover:bg-blue-400 py-1 px-3 rounded-md' to ='/posts'>posts</Link>
                  
        </div>
    );
};

export default Navber;