import React from 'react';

const Navber = () => {
    return (
        <div className='flex gap-3 list-none'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/section">Section</a></li>
            <li><a href="/content"> Content</a></li>
        </div>
    );
};

export default Navber;