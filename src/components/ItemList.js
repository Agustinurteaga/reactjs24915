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
        name:"info 1",
        description:"Test 1 Test 1",
    },
    {
        id:"item2",
        name:"info 2",
        description:"Test 2 Test 2",
    },
    {
        id:"item3",
        name:"info 3",
        description:"Test 3 Test 3",
    },
    {
        id:"item4",
        name:"info 4",
        description:"Test 4 Test 4",
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

