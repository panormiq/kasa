import styles from './Footer.module.css';
import logo from '../../images/LOGOWhite.png';
 
function Footer() {
    return (
       <div className={styles.contenant}>
             <img className={styles.image} src={logo} alt="Logo KASA"/>
             <p className={styles.text}>© 2020 Kasa. All rights reserved</p>

        </div>
    )
}

export default Footer