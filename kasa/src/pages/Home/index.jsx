import styles from './home.module.css';
import LogementCard from '../../components/card';
import { useState } from 'react';

function Home({page,updatePage}) {
  
  const logements=require("../../data/logements.json")
  const [page, updatePage] = useState(0);
  updatePage('home');
    return (
      //a remplacer par un module image titre hauteur!!!!
      <>
        <div  className={styles.titre}>
          <div  className={styles.img}>
            <h1 className={styles.h1}> Chez vous, partout ailleurs</h1>
          </div>
        </div>
        <div  className={styles.logement}>
         {logements.map((logement) => (  
           <LogementCard className={styles.LogementCard} key={logement.id} logement={logement}>
              
          </LogementCard>))}
        </div>
      </>

    )
  }
  
  export default Home