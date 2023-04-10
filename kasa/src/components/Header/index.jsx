import { Link } from 'react-router-dom'
import logo from '../../images/LOGO.png';
import styles from './Header.module.css'; 
 
function Header() {
   
    return (
        <header className={styles.header}>
      
            <img src={logo} alt="Logo KASA"/>
            <nav className={styles.nav}>
             
                <Link to="/" >Accueil</Link>
                <Link to="/about"> A Propos</Link>
            </nav>
     
        </header>
    )
}

export default Header