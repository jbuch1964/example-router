import React from 'react';
import { useHistory } from 'react-router-dom';
import Checkout from './Checkout';

function Cart() {
    let history = useHistory();
    return ( 
    
    <div>This is the Cart page.
       { /*} <button onClick={ () => {history.push("/Checkout"); }} </button> */} 
    </div>
    );
}
export default Cart;