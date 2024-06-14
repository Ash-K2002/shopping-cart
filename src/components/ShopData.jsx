import { useEffect,useState } from "react";

export default function useShopData(){

    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(null);
    const [data, setData]=useState(null);

    useEffect(
        ()=>{
            fetch('https://fakestoreapi.com/products?limit=20').
            then((response)=>{
                console.log('the data was fetched');
                if(response.status>=400){
                    throw new Error('server error');
                }
                return response.json();
            }).
            then((response)=>setData(response)).
            catch((error)=>setError(error)).
            finally(()=>{setLoading(false)});
            
        },
        []
    );
    return {loading,data,error};
}