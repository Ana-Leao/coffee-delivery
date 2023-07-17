import { MapPin, ShoppingCart } from 'phosphor-react';
import Logo from '../../img/logo.svg';
import styles from './styles.module.css';

export function Navbar() {
   return (
      <header>
         <nav className={styles.navbar}>
            <img src={Logo} alt='Logo Coffe Delivery' />
            <div className={styles.BtnContainer}>
               <a href='#' className={styles.BtnLocation}>
                  <MapPin size={18} weight='fill' />
                  <p>Belém, PA</p>
               </a>

               <button type='button' className={styles.btnCart}>
                  <ShoppingCart size={18} weight='fill' />
               </button>
            </div>
         </nav>
      </header>
   );
}
