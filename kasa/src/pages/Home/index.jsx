import styles from './home.module.css';
import loge
function Home() {
  
  const logements=require("../../data/logements.json")
 
    return (
      //a remplacer par un module image titre hauteur!!!!
      <>
        <div  className={styles.titre}>
          <div  className={styles.img}>
            <h1 className={styles.h1}> Chez vous, partout ailleurs</h1>
          </div>
        </div>
        <div  className={styles.logement}>
         {logements.map((logement) => ( <div>{logement.id}</div>))}

        </div>
      </>

    )
  }
  
  export default Home