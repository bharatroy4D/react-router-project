import React, { use } from 'react';
import "./user.css"
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const {id, name, username, email } = user;

    return (
        <div className='user-style'>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <Link className='text-blue-800' to={`/user/${id}`}>user Details</Link>
        </div>
    );
};

export default User;