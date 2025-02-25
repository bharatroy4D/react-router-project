import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDtails = () => {
    const user = useLoaderData();
    const {name, website} = user;
    return (
        <div>
            <h1>name :{name}</h1>
            <h1>website: {website}</h1>
        </div>
    );
};

export default UserDtails;