import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import useShopData from './components/ShopData';
import ErrorPage from './components/ErrorPage';
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import Cart from './components/CartPage';
import Navbar from './components/NavBar';
import ItemDetail from './components/ItemDetail';
import { useState } from 'react';
import PropTypes from 'prop-types';


function Root({loading, data, error}){
  const [cartItems, setCartItems] = useState([]);
  const [active,setActive]=useState(1);

  const addToCart=(itemId,quantity)=>{
    let index=-1;
    const item=data.find((dataItem)=>{
      return itemId==dataItem.id;
    });

    let cartItem=cartItems.find((item)=>{
      index+=1;
      return item.id==itemId;
    });
    
    // If found, update old array
    if(cartItem){
      let newCartItems=[...cartItems];
      let count=cartItem.count;
      newCartItems[index]={...cartItem,count:count+quantity};
      setCartItems(newCartItems);
    }
    else{
      cartItem={id:itemId, count:1,item:item};
      setCartItems([...cartItems, cartItem]);
    }
  }

  const deleteFromCart=(itemId, quantity)=>{
    let index=-1;

    let cartItem=cartItems.find((item)=>{
      index+=1;
      return item.id==itemId;
    });
    
    // If found, update old array
    if(cartItem){
      let newCartItems=[...cartItems];
      let count=cartItem.count;
      if(count<=quantity){
        newCartItems.splice(index,1);
      }
      else{
        newCartItems[index]={...cartItem, count:count-quantity};
      }
      
      setCartItems(newCartItems);
    }
    else{
      console.log('item to be deleted not found');
    }
  };


  const router = createBrowserRouter(
    [
      {
        path: '/',
        errorElement: <ErrorPage/>,
        element: <>
        <Navbar active={active}/>
        <section className="home">
         <HomePage setActive={setActive}/> 
        </section>
        </>
      },
      {
        path: '/shop',
        element: <>
        <Navbar active={active}/>
        <section className='shop'>
          <ShopPage loading={loading} data={data} error={error} addItem={addToCart} setActive={setActive} />
          </section>
          </>,
      },
      {
        path: '/cart',
        element: <>
        <Navbar active={active}/>
        <section className="cart">
          <Cart cart={cartItems} addItem={addToCart} delItem={deleteFromCart} setActive={setActive}/>
        </section>
        </>
      },
      {
        path:'/item/:id',
        element:<><ItemDetail list={data} addItem={addToCart}/></>
      }
      
    ]
    );
      return (
        <>
          <header className='appHead'>
            <h1>Superrrr Cart!!</h1>
          </header>
          <RouterProvider router={router}/>
        </>
      );
}


// Root proptype validation
Root.propTypes={
  loading:PropTypes.bool,
  data:PropTypes.array,
  error:PropTypes.object,
}


function App() {
const {loading, data, error}=useShopData();
return(
  <Root loading={loading} data={data} error={error}/>
)

}

export default App
