import styles from "./Logement.module.css";
import { useParams } from "react-router-dom";
import Rating from "../../components/Rating";
import Infos from "../../components/card/Info";
import Carouselle from "../../components/Carouselle";
import { useLocation, Navigate } from "react-router-dom";

const logements=require("../../data/logements.json")


function Logement() {
  let  logementId = useParams().id;
  const logement=logements.find(logement => logement.id===logementId)
  console.log(logement)
  console.log(useParams())
  let location = useLocation();
  if (!logement) {
    console.log("pas de logement");
 
    return <Navigate to="/*" state={{ from: location }} replace />;
  }


    return (

     
      <div className={styles.logement}> 
     
        <div className={styles.carouselle} >
        <Carouselle logement={logement}/> 
          </div> 
          <div className={styles.infosGenerals}>
            <div className={styles.infosLogement}>
              <h1>{logement.title}</h1>
              <h2>{logement.location}</h2>
              <div className={styles.infosLogementGeneral}>
            <div className={styles.tags}>
             {logement.tags.map((tag, i) => (           
              <p key={i}> {tag}</p>
              ))}
            </div>
          

          </div>
            </div>
            <div className={styles.infosP}>
            <div className={styles.infosProprio}>
            <div className={styles.civilite} >
              <p>{logement.host.name.split(' ')[0]}</p>
              <p>{logement.host.name.split(' ')[1]}</p>
            </div>
             <img  src={logement.host.picture} alt="Tete du proprietaire"/>
             </div>
             <div className={styles.rating}><Rating  ratingValue={logement.rating}/></div>
             
            </div>
           
          </div>
         
            <div className={styles.descriptionDetailler}>
             <div className={styles.infos}> <Infos titre="Description" text={[logement.description,]} /></div>
             <div className={styles.infos}> <Infos titre="Equipement" text={logement.equipments} className={styles.infos}/></div>

            </div>
              
          
       
      </div>
    
    )
  }
  
  export default Logement