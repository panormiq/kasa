import styles from './About.module.css';
import BandeauImage from '../../components/card/BandeauImage'
import Infos from '../../components/card/Info'



const paragraphs=[
{titre:"Fiablilité", text:"Les annonces postées sur Kasa garantissent une fiabilité total. Les photos sont conformes aux logements, et toutes informations sont réguilerement vérifiées par nos équipes"},
{titre:"Respect", text:"La bienveillance fait partie de valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du vouisinage entraînera une exclusion de notre plateforme"},
{titre:"Service", text:"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moidre question"},
{titre:"Sécurité", text:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôte que pour les voyageurs, chaque logement correspond aux critéres de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."},



];



function About() {
    return (
        <div className={styles.logement}>
        <div>
           <BandeauImage className={styles.image}  image={"../../../images/IMG.png"}/>
        </div>
        <div  className={styles.infocontenant}>
        {paragraphs.map((paragraph) => <div key={paragraph.titre} className={styles.infos}> <Infos titre={paragraph.titre} text={[paragraph.text,]} /></div>)}
        </div>
        </div>
    )
}
export default About