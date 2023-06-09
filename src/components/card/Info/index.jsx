import styles from './Info.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Info(props) {
    const {titre, text}=props;
  
  
   
    const [isOpen, setIsOpen] = useState(false)

    return (<div className={styles.contenant}> {isOpen ? 
        <div className={styles.contenus} >
            
            <button className={styles.button} onClick={() => setIsOpen(false)}><div>{titre}</div> <FontAwesomeIcon   icon={faChevronUp} /></button>
           
            <div className={styles.contenu}>
                {text.map((ligne ,i) => (
                    <div key={i}>{ligne}</div>
                )
                )}
          
            </div>
            
        </div>
     : 
        <button  className={styles.button} onClick={() => setIsOpen(true)}>{titre} <FontAwesomeIcon   icon={faChevronDown} /></button>
    
                 } </div>)
}

export default Info