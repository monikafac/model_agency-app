import React from 'react';
import './ModelList.css'

const ModelsList = (props) => {
    const users=props.users.map(user=>(
        <div key={user.login.uuid}>
        <img src={user.picture.large} alt={user.name.last}/>
        <p>{`${user.name.first} ${user.name.last}`}</p>
        </div>
    ))
    return ( <div className='users'>
    {users}
    </div> );
}
 
export default ModelsList;