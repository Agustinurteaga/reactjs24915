import "./App.css";
import "./styles.css";

import CardComponent from './components/CardComponent.js';
import NavBar from "./components/NavBar.js";
import ItemCount from "./components/ItemCount.js"
import React, { Component } from "react";
import { ItemList } from "./components/ItemList";
import ItemDetailContainer from './components/ItemDetailContainer'

const name = "test";

class App extends Component {
  render () {
    return (
      <>
      <NavBar/>
      <ItemDetailContainer/>

      
      </>
    )
  }
}
export default App;

















 // const App = () => {
  //   return (
  //     <div>
  //     </NavBar>
  //     </ItemList>
  
  // </div>
  
  //   )
  // }