// set de componentes. items.js 
// async mock *promise, usa un efecto de montaje para poder emitir un llamado
// asincronico a un mock *objeto estatico que devuelve un conjunto de items.
// en dos segundos para la consigna del tp 5

import React from 'react';
import Item from './Item'


export const ItemList = () => {
const listaItems = [
    {
        id:"item1",
        name:"Primer Objeto",
        description:"info del objeto 1",
        price: " $1 "
    },
    {
        id:"item2",
        name:"Segundo Objeto",
        description:"info del objeto 2",
        price: " $2 "
    },
    {
        id:"item3",
        name:"Tercer Objeto",
        description:"info del objeto 3",
        price: " $3 "
    },
    {
        id:"item4",
        name:"Cuarto Objeto",
        description:"info del objeto 4",
        price: " $4 "
    }
]

    return (
        <div> {
            listaItems.map((item)=> {
            return (<div> <Item info = {item}/> </div>) ;
            }) 
            } </div>
    );
};

