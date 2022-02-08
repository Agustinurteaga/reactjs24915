// Al iniciar utilizando un efecto de montaje llama async mock 
// Promise 2sseg 1 item y lo guarde en estado propio
// Item Details.js vista detallada del producto

import React, {useState, useEffect} from 'react';
import ItemDetails from './ItemDetails';

const ItemDetailContainer = () => {
    
    const promesa = new Promise((resolve)=> {
        setTimeout (()=>{
        resolve(getPersonaje())
    },2000)
})

    const [statePersonajes, setPersonajes] = useState([])

    useEffect(()=> {
        fetch ('http://hp-api.herokuapp.com/api/characters') 
        .then(res => res.json())
        .then (json => setPersonajes(json))
        .catch ((error) => console.log (error))

},[]);

function getPersonaje() {
    return statePersonajes[0];
}
    return (
        <div class='itemListContainer'>
            <ItemDetails info= {getPersonaje()}/>
        </div>
)
}
export default ItemDetailContainer;

// export const ItemList = () => {
//     const listaItems = [
//         {
//             id:"item1",
//             name:"Primer Objeto",
//             description:"info del objeto 1",
//             price: " $1 "
//         }, 
//         {
//             id:"item2",
//             name:"Segundo Objeto",
//             description:"info del objeto 2",
//             price: " $2 "
//         }, 
//         {
//             id:"item3",
//             name:"Tercer Objeto",
//             description:"info del objeto 3",
//             price: " $3 "
//         },
//         {
//             id:"item4",
//             name:"Cuarto Objeto",
//             description:"info del objeto 4",
//             price: " $4 "
//         }
//     ] 
//         return (
//             <div> {
//                 listaItems.map((item)=> {
//                 return (<div> <Item info = {item}/> </div>) ;
//                 }) 
//                 } </div>
    
    
//         );
//     };
// export default ItemListContainer;