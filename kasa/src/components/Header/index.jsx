import { NavLink } from 'react-router-dom'
import logo from '../../images/LOGO.png';
import styles from './Header.module.css'; 

 
function Header() {
   
 
    return (
      
        <header className={styles.header}>
              
            <img src={logo} alt="Logo KASA"/>
            <nav className={styles.nav}>
             
                <NavLink to="/"  className={({ isActive }) => isActive ? styles.activeLink : ''}> Accueil  </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : ''}> A Propos</NavLink>
            </nav>
     
        </header>
    )
}

export default Header