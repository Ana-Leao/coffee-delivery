import { CoffeeCard } from '../../components/CoffeeCard';
import styles from './styles.module.css';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

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
                        <Package size={16} weight="fill" />
                     </span>
                     <span>Embalagem mantém o café intacto</span>
                  </div>

                  <div className={styles.contentIcons}>
                     <span className={styles.icon}>
                        <Timer size={16} weight='fill' />
                     </span>
                     <span>Entrega rápida e rastreada</span>
                     <span className={styles.icon}>
                        <Coffee size={16} weight='fill' />
                     </span>
                     <span>O café chega fresquinho até você</span>
                  </div>
               </div>
            </div>
            <img src='/src/img/bg-coffee.png' alt='' />
         </div>

         <section>
            <h3>Nossos Cafés</h3>

            <div>
               <CoffeeCard />
            </div>
         </section>
      </main>
   );
}
