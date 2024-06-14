import CartDeck from './CartCards';
import PropTypes from 'prop-types';

export default function Cart({cart, addItem, delItem, setActive}){
    setActive(3);
    return (
        <>
            <CartDeck cart={cart} addItem={addItem} delItem={delItem} />
        </>
    );
}

Cart.propTypes={
    cart:PropTypes.array,
    addItem:PropTypes.func,
    delItem:PropTypes.func,
    setActive:PropTypes.func,
}