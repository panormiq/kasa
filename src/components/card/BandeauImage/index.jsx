
import styles from './BandeauImage.module.css'




function BandeauImage(props) {

    const image=props.image
    console.log({image});
    
   
    return  (
        <div>
        <div className={styles.img}
           
            ><img src={image} alt="montagne" ></img> </div>
        
          </div>
    ) 
}

export default BandeauImage