import React from 'react';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image";
import styles from '../styles/coming/coming.module.css'


export default () => {
    return(
        <React.Fragment>
        
         <div className={styles.header}>
            <div className={styles.hero}>
                <h1>Bootcamp</h1>
            </div>
         </div>
         <div className={styles.story}>
             <div className={styles.card}>
                 <div className={styles.column}>
                     <div>
                        <h2>On Progress...</h2>   
                        <h6>Coming soon!</h6>
                     </div>
                     <div className={styles.col12}>
                        <h7>We are still preparing what is the best for you all.</h7>
                        <a className='text-light' href='#'>Remind me if it's ready</a>
                     </div>   
                 </div>
                 <div className={styles.imageColumn}>
                     <div>  
                       <Image src="/images/coming/comingSoon.svg" width={468} height={351}className={styles.image}/>
                     </div>
                 </div>
                

             </div>

         </div>
        </React.Fragment>
    )
}