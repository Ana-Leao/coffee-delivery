import { ShoppingCartSimple } from 'phosphor-react';
import { ButtonCounter } from '../ButtonCounter';
import styles from './styles.module.css';

const coffees = [
   {
      id: '1',
      pathImage: '/coffees/Coffee.png',
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      badge: ['Tradicional'],
   },
   {
      id: '2',
      pathImage: '/coffees/Coffee-1.png',
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      badge: ['Tradicional'],
   },
   {
      id: '3',
      pathImage: '/coffees/Coffee-2.png',
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
      badge: ['Tradicional'],
   },
   {
      id: '4',
      pathImage: '/coffees/Coffee-3.png',
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      badge: ['Tradicional', 'Gelado'],
   },
   {
      id: '5',
      pathImage: '/coffees/Coffee-4.png',
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      badge: ['Tradicional', 'Com leite'],
   },
   {
      id: '6',
      pathImage: '/coffees/Coffee-5.png',
      title: 'Latte',
      description: 'Uma dose de café expresso com o dobro de leite e espuma cremosas',
      price: 9.9,
      badge: ['Tradicional', 'Com leite'],
   },
];

export function CoffeeCard() {
   return (
      <div className={styles.content}>
         {coffees?.map((coffee) => (
            <div id={coffee.id} className={styles.coffeeCard}>
               <img
                  src={coffee.pathImage}
                  alt='Card de café com preço e opção de adicionar ao carrinho'
               />
               <div className={styles.coffeeBadge}>
                  <b className={styles.text}>{coffee.badge}</b>
               </div>
               <span className={styles.coffeeTitle}>{coffee.title}</span>
               <p className={styles.coffeDescription}>{coffee.description}</p>

               <div className={styles.containerButton}>
                  <b>
                     <span>R$</span>
                     {coffee.price}
                  </b>

                  <ButtonCounter />

                  <button
                     className={styles.buttonCart}
                     type='button'
                     title='Carrinho'
                  >
                     <ShoppingCartSimple width={18} weight='fill' />
                  </button>
               </div>
            </div>
         ))}
      </div>
   );
}
