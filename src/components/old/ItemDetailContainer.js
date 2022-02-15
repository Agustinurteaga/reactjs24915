

// import React, {useState, useEffect} from 'react';
// import ItemDetails from './ItemDetails';

// const ItemDetailContainer = () => {
    
//     const promesa = new Promise((resolve)=> {
//         setTimeout (()=>{
//         resolve(getPersonaje())
//     },2000)
// })

    // const [statePersonajes, setPersonajes] = useState([])

//     useEffect(()=> {
//         fetch ('http://hp-api.herokuapp.com/api/characters') 
//         .then(res => res.json())
//         .then (json => setPersonajes(json))
//         .catch ((error) => console.log (error))

// },[]);

// function getPersonaje() {
//     return statePersonajes[0];
// }
//     return (
//         <div class='itemListContainer'>

//             <ItemDetails info= {getPersonaje()}/>
            
//         </div>
// )
// }
// export default ItemDetailContainer;