
import styles from './BandeauImage.module.css'




function BandeauImage(props) {

    const image=props.image
    console.log({image});
    
   
    return  (
        <div>
        <div 
           style={{ 
            "backgroundImage": 'url('+{image }+')', }}
           className={styles.img} > </div>
        
          </div>
    ) 
}

export default BandeauImage