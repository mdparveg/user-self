import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart.salary);
    const total = cart.reduce((sum , per) => sum + per.salary, 0)
    return (
        <div>
            <h1>Total Add Friends {cart.length}</h1>
    <h4>Total Salary: {total}</h4>
        </div>
    );
};

export default Cart;