import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import DeliveryBoy from '../../assets/img/Illustration.svg';

export function ConfirmedOrder() {
   return (
      <>
         <div className='layout-container mb-32'>
            <Navbar />
            <div className='mb-11 mt-20'>
               <h1 className='font-Baloo text-[2rem] text-yellow-dark font-extrabold'>
                  Uhu! Pedido confirmado
               </h1>
               <span className='text-base-subtitle text-xl'>
                  Agora é só aguardar que logo o café chegará até você
               </span>
            </div>
            <div className='grid grid-rows-1 grid-cols-2 mt-20'>
               <div>
                  <div className='bg-teste relative p-[0.1rem] rounded-bl-3xl rounded-br-md rounded-tr-3xl rounded-tl-md'>
                     <div className='bg-background p-10 rounded-bl-3xl rounded-br-md rounded-tr-3xl rounded-tl-md'>
                        <div className='flex items-center gap-3 mb-8'>
                           <span className='bg-purple p-2 rounded-full w-8 h-8 flex justify-center items-center text-background'>
                              <MapPin size={16} weight='fill' />
                           </span>

                           <span>
                              Entrega em <b>Travessa nove de janeiro, 3033</b>
                              <br />
                              Cremação - Belém, PA
                           </span>
                        </div>

                        <div className='flex items-center gap-3 mb-8'>
                           <span className='bg-yellow p-2 rounded-full w-8 h-8 flex justify-center items-center text-background'>
                              <Timer size={16} weight='fill' />
                           </span>

                           <span>
                              Previsão de entrega
                              <br />
                              20 min - 30 min
                           </span>
                        </div>

                        <div className='flex items-center gap-3'>
                           <span className='bg-yellow-dark p-2 rounded-full w-8 h-8 flex justify-center items-center text-background'>
                              <CurrencyDollar size={16} weight='fill' />
                           </span>

                           <span>
                              Pagamento na entrega
                              <br />
                              cartão de crédito
                           </span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className='flex items-center justify-center'>
                  <img
                     src={DeliveryBoy}
                     alt='Ilustração de um entregador em uma moto'
                  />
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
}
