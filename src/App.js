import "./App.css";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// componentes
import NavBar from "./components/NavBar.js";
// windows
import Home from './components/windows/Home';
import Informacion from './components/windows/Informacion';
import Contacto from './components/windows/Contacto';
import ItemDetail from './components/items/ItemDetail';
import Posters from "./components/Posters";
// context



const App = () => {
    return (
      <Router>
      <div className="App">
        <NavBar/>
        <Routes>
        <Route path='/' element={<Home />} />
				<Route path='/Informacion' element={<Informacion />} />
				<Route path='/Contacto' element={<Contacto />} />
        <Route path='/detail/:id' element={<ItemDetail />} />
				<Route path='/Posters' element={<Posters />} />
        </Routes>
      </div>
      </Router>
      //test

      
    )
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