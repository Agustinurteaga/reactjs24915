import React, { createContext, useState} from 'react';
export const ItemsContext = createContext();

const initialState = [
    {id: 1, name: 'test1', price:20}
    {id: 2, name: 'test2', price:30}
];

export const ItemsProvider = (children) =>{
    const [items, setItems] = useState (initialState);

    return( <ItemsContext.Provider>
        {children}
    </ItemsContext.Provider>
    )

};

export default App


