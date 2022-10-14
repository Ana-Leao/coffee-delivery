import Logo from '../../assets/img/logo-navbar.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';

export function Navbar() {
   return (
      <nav className='flex items-center justify-between h-24 text-sm'>
         <img src={Logo} alt='Logo da cafeteria' className='w-24 h-[90px]' />

         <div className='flex gap-3'>
            <a
               href='https://goo.gl/maps/U97MgUYsyd1yH1yEA'
               target='_blank'
               className='flex items-center gap-1 p-2 rounded-md bg-purple-light text-purple-dark '
            >
               <MapPin size={22} />
               Belém, PA
            </a>
            <button
               title='Carrinho de compras'
               className='bg-yellow-light text-yellow-dark p-2 rounded-md'
            >
               <ShoppingCart size={22} weight='fill' />
            </button>
         </div>
      </nav>
   );
}
