import styles from './Carouselle.module.css'
import { useState , useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';

function Carouselle(props) {

    const logement=props.logement
    console.log(logement.pictures.length);
  
    const [displayPhotoNumber, updatePhotoNumber] = useState(0)
    console.log({displayPhotoNumber});
   
    return  (
        <div className={styles.img} style={{ 
            "backgroundImage": 'url(' + logement.pictures[displayPhotoNumber] + ')', }} >
  
                 <button className={styles.button} onClick={() => updatePhotoNumber(displayPhotoNumber===1 ? logement.pictures.length-1:displayPhotoNumber-1)}><div></div> <FontAwesomeIcon   icon={faChevronLeft} /></button>
                 <button className={styles.button} onClick={() => updatePhotoNumber(displayPhotoNumber===logement.pictures.length-1 ? 0:displayPhotoNumber+1)}><div></div> <FontAwesomeIcon   icon={faChevronRight} /></button>
                </div> 
    ) 
}

export default Carouselle