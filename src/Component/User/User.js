import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import './User.css'
import People from '../People/People';
import Cart from '../Cart/Cart';

const User = () => {
    const data = fakeData;
    const [user, setUser] = useState(data);
    const [cart, setCart] = useState([])
    const addFriends = (people) => {
        console.log('friends added', people);
        const newCart = [...cart, people]
        setCart(newCart)
    }
    return (
        <div className="user-container">
            <div className="details">
                <h1>Total Friends:{user.length}</h1>
                {
                    user.map(user => <People key={user.id}
                        addFriends={addFriends}
                        user={user}></People>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default User;