import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '../styles/itemdetail.module.css';
import styleglobal from '../styles/global.module.css';

function ItemDetailCard({id,title, description, image, price,addItem}){
    return(
        <section className={styles.itemdetail}>
        <Link to={'/shop'}><ArrowBackIcon/></Link>
        <h2 className={styles.itemtitle}>{title}</h2>
        <img className={styles.itemicon} src={image} alt={title}/>
        <p className={styles.itemdesc}>{description}</p>
        <p className={styles.itemprice}><span>Price:</span> ${price}</p>
        <button className={styleglobal.button1} onClick={()=>{addItem(id,1)}}>Add to Cart</button>
        </section>
    );
}

export default function ItemDetail({list,addItem}){
const {id}= useParams();

if(list){
const item = list.find((listItem)=>listItem.id==id);

return(
    <>
        <ItemDetailCard id={item.id} title={item.title} description={item.description} image={item.image} price={item.price} addItem={addItem}/>
    </>
);
}
else{
    return(
        <>
        <h1>loading...</h1>
        </>
    );
}

}

ItemDetailCard.propTypes={
    title:PropTypes.string,
    id:PropTypes.number,
    description:PropTypes.string,
    image:PropTypes.string,
    price:PropTypes.number,
    addItem:PropTypes.func,

}

ItemDetail.propTypes={
    list:PropTypes.array,
    addItem:PropTypes.func,
}