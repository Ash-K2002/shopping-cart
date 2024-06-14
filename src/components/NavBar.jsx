import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ShopIcon from '@mui/icons-material/Shop';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from '../styles/Navbar.module.css'
import PropTypes from 'prop-types';

export default function Navbar({active}){
    return (<>
    <nav className={styles.navbar}>
           <ul className={styles.navlist}>
            <li className={`${styles.navitem} ${(active==1)?styles.active:''}`}><Link to={'/'}><HomeIcon className={styles.icon}/><p>Home</p></Link></li>
            <li className={`${styles.navitem} ${(active==2)?styles.active:''}`}><Link to={'/shop'}><ShopIcon className={styles.icon}/><p>Shop</p></Link></li>
            <li className={`${styles.navitem} ${(active==3)?styles.active:''}`}><Link to={'/cart'}><ShoppingCartIcon className={styles.icon}/><p>Cart</p></Link></li>
        </ul>
    </nav>
     
    </>);
}

Navbar.propTypes={
    active:PropTypes.number,
}