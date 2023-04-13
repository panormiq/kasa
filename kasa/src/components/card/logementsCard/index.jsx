import styles from './LogementCard.module.css'; 
import { Link } from 'react-router-dom';
function LogementCard(props) {
  const logement=props.logement
 
  console.log(logement);
    return (
        <Link  className={styles.lien} to={'/logement/' + logement.id}  >
          <div className={styles.link} style={{ 
      "backgroundImage": 'url(' + logement.cover + ')', }} >
          <p className={styles.titre}> {logement.title} </p> </div> </Link>
       
    )
}

export default LogementCard