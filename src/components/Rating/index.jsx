
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import  styles from './Rating.module.css' ;


function Rating(props) {
    const ratingValue = props.ratingValue
    const range= [1, 2, 3, 4, 5]
     
    return (
        <div className={styles.contenant}>
        {range.map((rangeElem) =>
          ratingValue >= rangeElem ?  <div key={rangeElem.toString()}  ><FontAwesomeIcon className={styles.rouge}  icon={faStar} /></div> :  <div key={rangeElem.toString()}  ><FontAwesomeIcon className={styles.gray}  icon={faStar} /></div>
         
        )}
        </div>
    )
}

export default Rating