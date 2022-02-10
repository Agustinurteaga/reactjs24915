import '../components/NavBar.css'
import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom'


const NavBar = () => {
return (
    <nav className='Navigation'>
        <ul>
        <Link to='/' className='Link'>
					Home
				</Link>

                <Link to='/Informacion' className='Link'>
					Info
				</Link>

                <Link to='/Contacto' className='Link'>
					Contacto
				</Link>
            <CartWidget/>
        </ul>
    </nav>

) 
}

export default NavBar;

