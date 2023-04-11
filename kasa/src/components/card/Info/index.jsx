import styles from './Info.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Info(props) {
    console.log(props);
    const titre = props.titre;
    const text = props.text;
  
    console.log(text);
    
    console.log({titre})
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div >
            <button className={styles.button} onClick={() => setIsOpen(false)}><div>{titre}</div> <FontAwesomeIcon   icon={faChevronUp} /></button>
           
            <div className={styles.contenu}>
                {text.map((ligne ,i) => (
                    <div key={i}>{ligne}</div>
                )
                )}
          
            </div>
            
        </div>
    ) : (
        <button  className={styles.button} onClick={() => setIsOpen(true)}>{titre} <FontAwesomeIcon   icon={faChevronDown} /></button>
    )
}

export default Info