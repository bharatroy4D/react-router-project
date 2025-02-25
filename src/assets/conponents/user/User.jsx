import React, { use } from 'react';
import "./user.css"

const User = ({user}) => {
    const {name, username, email} = user;
    
    return (
        <div className='user-style'>
           <p>{name}</p>  
           <p>{username}</p>  
           <p>{email}</p>  
        </div>
    );
};

export default User;