
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import  style from './Rating.module.css' ;


function Rating(props) {
    const ratingValue = props.ratingValue
    const range= [1, 2, 3, 4, 5]
     
    return (
        <div>
        {range.map((rangeElem) =>
          ratingValue >= rangeElem ?  <spam key={rangeElem.toString()}  ><FontAwesomeIcon className={style.rouge}  icon={faStar} /></spam> :  <spam key={rangeElem.toString()}  ><FontAwesomeIcon className={style.gray}  icon={faStar} /></spam>
         
        )}
        </div>
    )
}

export default Rating