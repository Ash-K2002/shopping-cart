import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/ShopCard.module.css';


function Card({item}){

    return(
        <>
            <Link className={styles.shopitemlink} to={`/item/${item.id}`}>
            <section className={styles.shopitem}>
                <h3>{item.title}</h3>
                <img src={item.image} alt="title"/>
                <p>Price: ${item.price}</p>
                </section>
            </Link>
        
        </>
    )
}

function Deck({arr}){
    const items=[];

    for(const item of arr){
        items.push(<section className={styles.shopcard} key={item.id}><Card item={item} /></section>);
    }
    return(
        <>
        <section className={styles.shopdeck}>
            {items}
        </section>
        
        </>
    )
}

Card.propTypes={
    item:PropType.object,
    addItem:PropType.func,
}

Deck.propTypes={
    arr:PropType.array,
    addItem:PropType.func,
}



export {Card,Deck};