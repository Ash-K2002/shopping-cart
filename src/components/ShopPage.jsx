import PropTypes from 'prop-types';
import {Deck} from './Card';


export default function ShopPage({loading, data, error, addItem,setActive}){
    setActive(2);
    if(loading)
        {
            return(<><h2>loading...</h2></>);
        }
    if(error){
        console.log(error);
        return(
            <><h2>Some Error Occured!!</h2></>
        )
    }
    if(data){
        return(
            <Deck arr={data} addItem={addItem} />
        )
    }
}

ShopPage.propTypes={
    loading:PropTypes.bool,
    data:PropTypes.array,
    error:PropTypes.object,
    addItem:PropTypes.func,
    setActive:PropTypes.func,
};