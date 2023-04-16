import styles from "./NotFound.module.css"
import { Link } from "react-router-dom";


const paragraphs=
  {titre:"404",
  text:"Oups! La page que vous demandez n'existe pas.",
  lien:"Retourner sur la page d'accueil"};
  console.log(paragraphs);
function NotFound() {
    return (
      <div className={styles.contenant}>
        <h1 className={styles.titre}> {paragraphs.titre} </h1>
        <div className={styles.text}>{paragraphs.text}</div>

        <div className={styles.lien}><Link to="/"> {paragraphs.lien}</Link></div>
      </div>
    )
  }
  
  export default NotFound