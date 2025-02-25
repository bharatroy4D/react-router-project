import React from 'react';
import { useLoaderData,  } from 'react-router-dom';
import User from '../user/User';

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>our users:{users.length} </h2>
            <div  className=' grid grid-cols-3 gap-4'>
                {
                    users.map( user =><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;