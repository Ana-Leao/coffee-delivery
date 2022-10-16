import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import CoffeeBanner from '../../assets/img/image-banner.png';
import { Navbar } from '../../components/Navbar';

export function Home() {
   return (
      <>
         <div className='layout-container'>
            <Navbar />
         </div>
         <header className='flex items-center w-full pt-24 pb-24 bg-backgroundBanner bg-no-repeat bg-cover'>
            <div className='layout-container flex items-center justify-between'>
               <div className='textContent'>
                  <div className='mb-16'>
                     <h1 className='font-Baloo font-extrabold text-5xl text-base-title mb-4'>
                        Encontre o café perfeito para qualquer hora do dia
                     </h1>
                     <p className='text-xl font-normal text-base-subtitle'>
                        Com o Coffee Delivery você recebe seu café onde estiver,
                        a qualquer hora
                     </p>
                  </div>
                  <div>
                     <div className='flex'>
                        <div className='flex items-center gap-3 mb-5 mr-10'>
                           <span className='flex items-center justify-center bg-yellow-dark w-8 h-8 rounded-full text-white'>
                              <ShoppingCart size={16} weight='fill' />
                           </span>
                           <span className='text-base-text'>
                              Compra simples e segura
                           </span>
                        </div>

                        <div className='flex items-center gap-3 mb-5'>
                           <span className='flex items-center justify-center bg-base-text w-8 h-8 rounded-full text-white'>
                              <Package size={16} weight='fill' />
                           </span>
                           <span className='text-base-text'>
                              Embalagem mantém o café intacto
                           </span>
                        </div>
                     </div>

                     <div className='flex'>
                        <div className='flex items-center gap-3 mr-10'>
                           <span className='flex items-center justify-center bg-yellow w-8 h-8 rounded-full text-white'>
                              <Timer size={16} weight='fill' />
                           </span>
                           <span className='text-base-text'>
                              Entrega rápida e rastreada
                           </span>
                        </div>

                        <div className='flex items-center gap-3'>
                           <span className='flex items-center justify-center bg-purple w-8 h-8 rounded-full text-white'>
                              <Coffee size={16} weight='fill' />
                           </span>
                           <span className='text-base-text'>
                              O café chega fresquinho até você
                           </span>
                        </div>
                     </div>
                  </div>
               </div>

               <div>
                  <img src={CoffeeBanner} alt='Copo de café' />
               </div>
            </div>
         </header>
      </>
   );
}
