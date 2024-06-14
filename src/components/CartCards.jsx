import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styles from '../styles/cartcards.module.css';
import styleglobal from '../styles/global.module.css';


function CartCard({item,quantity,addItem,delItem}){
    return(
        <section className={styles.cartitem}>
            <header className={styles.cartitemheader}>
                <h3>{item.title}</h3>
            </header>
            <section className={styles.cartitembody}>
                <img className={styles.cartitemicon} src={item.image} alt={item.title} />
                <section className={styles.cartitemdetails}>
                    <p className={styles.cartitemdesc}><span>Price per Item:</span> ${item.price}</p>
                    <p className={styles.cartitemdesc}><span>Quantity:</span>{quantity}</p>  
                </section>
                <section className={styles.cartitemaction}>
                    <button className={styleglobal.button1} onClick={()=>{addItem(item.id,quantity=1)}}><AddIcon/></button>
                    <button className= {styleglobal.button1} onClick={()=>{delItem(item.id,quantity=1)}}><RemoveIcon/></button> 
                </section>
            </section>
        </section>
        
    );
}

export default function CartDeck({cart, addItem, delItem}){
    if(cart)
        {
            let cartArr=[...cart];
            let total=0;
            cartArr=cartArr.map((cartItem)=>{
                let item=cartItem.item;
                total+=cartItem.count*item.price;
                return(<CartCard item={item} key={item.id} quantity={cartItem.count} addItem={addItem} delItem={delItem}/>);
                
            });
            return(<>
            <header className='cartHead'>
                <h2>Cart</h2>
            </header>
            <section className={styles.cartitems}>
                {cartArr}
            </section>
            <section className={styles.totalPrice}>Total: ${total.toFixed(2)}</section>
            </>);
        }
    else{
        return(<><h1>loading...</h1></>);
    }
}

CartDeck.propTypes={
    cart:PropTypes.array,
    addItem:PropTypes.func,
    delItem:PropTypes.func,
}

CartCard.propTypes={
    item:PropTypes.object,
    quantity:PropTypes.number,
    addItem:PropTypes.func,
    delItem:PropTypes.func,
}

