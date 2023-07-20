import styles from './styles.module.css';
import { Minus, Plus } from 'phosphor-react';

export function ButtonCounter() {
   const quantity = 0;

   return (
      <div className={styles.containerButton}>
         <button type='button'>
            <Plus width={14} weight='bold'/>
         </button>
         <span>{quantity}</span>
         <button type='button'>
            <Minus width={14} weight='bold'/>
         </button>
      </div>
   );
}
