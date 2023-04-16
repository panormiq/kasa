import { NavLink } from 'react-router-dom'
import logo from '../../images/LOGO.png';
import styles from './Header.module.css'; 

 
function Header() {
   
 
    return (
      
        <header className={styles.header}>
              
            <img src={logo} alt="Logo KASA"/>
            <nav className={styles.nav}>
             
                <NavLink to="/"  className={({ isActive }) => isActive ? styles.activeLink : ''}> <div className={styles.desktop}>Accueil</div><div className={styles.mobile}>ACCUEIL</div>  </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : ''}> <div className={styles.desktop}>A Propos</div><div className={styles.mobile}>A PROPOS</div></NavLink>
            </nav>
     
        </header>
    )
}

export default Header