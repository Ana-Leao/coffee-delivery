import styles from './styles.module.css';
import { ShoppingCart } from 'phosphor-react';

export function Home() {
   return (
      <main className={styles.container}>
         <div className={styles.content}>
            <div className={styles.contentText}>
               <h1>Encontre o café perfeito para qualquer hora do dia</h1>

               <h2>
                  Com o Coffee Delivery você recebe seu café onde estiver, a
                  qualquer hora.
               </h2>

               <div className={styles.containerIcons}>
                  <div className={styles.contentIcons}>
                     <span className={styles.icon}>
                        <ShoppingCart size={16} weight='fill'/>
                     </span>
                     <span>Compra simples e segura</span>

                     <span className={styles.icon}>
                        <ShoppingCart size={16} weight='fill' />
                     </span>
                     <span>Compra simples e segura</span>
                  </div>

                  <div className={styles.contentIcons}>
                     <span className={styles.icon}>
                        <ShoppingCart size={16} weight='fill' />
                     </span>
                     <span>Compra simples e segura</span>
                     <span className={styles.icon}>
                        <ShoppingCart size={16} weight='fill' />
                     </span>
                     <span>Compra simples e segura</span>
                  </div>
               </div>
            </div>

            <img src='/src/img/bg-coffee.png' alt='' />
         </div>
      </main>
   );
}
