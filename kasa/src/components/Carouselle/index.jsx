import styles from './Carouselle.module.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';

function Carouselle(props) {

    const logement=props.logement
   
  
    const [displayPhotoNumber, updatePhotoNumber] = useState(0)
    
   
    return  (
        <div className={styles.img} style={{ 
            "backgroundImage": 'url(' + logement.pictures[displayPhotoNumber] + ')', }} >
                {(logement.pictures.length===1) ?"":<div className={styles.buttonContenant}>
                 <button className={styles.button} onClick={() => updatePhotoNumber(displayPhotoNumber<=1 ? logement.pictures.length-1:displayPhotoNumber-1)}><div></div> <FontAwesomeIcon   icon={faChevronLeft} /></button>
                 
                 <button className={styles.button} onClick={() => updatePhotoNumber(displayPhotoNumber>=logement.pictures.length-1 ? 0:displayPhotoNumber+1)}><div></div> <FontAwesomeIcon   icon={faChevronRight} /></button></div>}
                 <div className={styles.compteur}> {displayPhotoNumber+1}/{logement.pictures.length} </div>
        </div> 
    ) 
}

export default Carouselle