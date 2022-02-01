import '../components/NavBar.css'
import CartWidget from "./CartWidget"



const NavBar = () => {
return (
    <nav className='Navigation'>
        <ul>
            <li>Listado </li>
            <li>Listado 2</li>
            <li>Listado 3 </li>
            <li>Listado 4 </li>
            <CartWidget/>
        </ul>
    </nav>

) 
}

export default NavBar;

