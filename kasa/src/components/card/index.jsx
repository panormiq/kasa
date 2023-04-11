import styles from './LogementCard.module.css'; 
import { Link } from 'react-router-dom';
function LogementCard(props) {
  const logement=props.logement
  const logementUrl=logement.cover;
  console.log(logement);
    return (
        <Link  to={'/logement/' + logement.id}  >
          <div className={styles.link} style={{ 
      "backgroundImage": 'url(' + logement.cover + ')', }} >
            {logement.title} </div> </Link>
       
    )
}

export default LogementCard