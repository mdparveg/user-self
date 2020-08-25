import React from 'react';
import './People.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons'

const People = (props) => {
    const { name, img, email, phone } = props.user;
    return (
        <div className="people">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="info">
                <h2>This is {name}</h2>
                <h5>Email: {email}</h5>
                <p>Phone: {phone}</p>
                <button className="main-button" 
                onClick={() => props.addFriends(props.user)}
                ><FontAwesomeIcon icon={faPlus} />Add Friend</button>
            </div>
        </div>
    );
};

export default People;