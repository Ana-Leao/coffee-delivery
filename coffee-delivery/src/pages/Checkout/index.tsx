import { useState } from 'react';
import {
   Bank,
   CreditCard,
   CurrencyDollar,
   MapPinLine,
   Money,
} from 'phosphor-react';
import { Navbar } from '../../components/Navbar';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Footer } from '../../components/Footer';
import { CardCheckout } from '../../components/CardCheckout';

export function Checkout() {
   const [paymentOption, setPaymentOption] = useState('');

   return (
      <>
         <div className='layout-container'>
            <Navbar />
            <section className='grid grid-rows-1 gap-8 lg:grid-cols-2 mt-10 mb-10'>
               <div>
                  <b className='font-Baloo text-lg font-bold'>
                     Complete seu pedido
                  </b>
                  <form className='bg-base-card p-10 rounded-md mt-4 mb-3'>
                     <div className='flex items-start gap-x-2 mb-8'>
                        <MapPinLine size={20} className='text-yellow-dark' />
                        <div>
                           <p className='text-base-subtitle'>
                              Endereço de entraga
                           </p>
                           <p className='text-sm text-base-text'>
                              Informe o endereço onde quer receber seu pedido
                           </p>
                        </div>
                     </div>
                     <input
                        id='zipcode'
                        name='zipcode'
                        placeholder='CEP'
                        type='text'
                        className='grid grid-rows-1 mb-4'
                     />
                     <input
                        id='street'
                        name='street'
                        placeholder='Rua'
                        type='text'
                        className='grid grid-rows-1 w-full mb-4'
                     />
                     <div className='grid grid-rows-1 grid-cols-2 gap-3 mb-4'>
                        <input
                           id='number'
                           name='number'
                           placeholder='Número'
                           type='text'
                        />
                        <input
                           id='complement'
                           name='complement'
                           placeholder='Complemento'
                           type='text'
                        />
                     </div>
                     <div className='grid grid-rows-1 grid-cols-3 gap-3'>
                        <input
                           id='neighborhood'
                           name='neighborhood'
                           placeholder='Bairro'
                           type='text'
                        />
                        <input
                           id='city'
                           name='city'
                           placeholder='Cidade'
                           type='text'
                        />
                        <input id='uf' name='uf' placeholder='UF' type='text' />
                     </div>
                  </form>

                  <div className='bg-base-card p-10 rounded-md'>
                     <div className='flex items-start gap-2'>
                        <CurrencyDollar size={22} className='text-purple' />
                        <div>
                           <p className='text-base-subtitle'>Pagamento</p>
                           <p className='text-sm text-base-text'>
                              O pagamento é feito na entrega. Escolha a forma
                              que deseja pagar
                           </p>
                        </div>
                     </div>

                     <div className='mt-8'>
                        <ToggleGroup.Root
                           type='single'
                           value={paymentOption}
                           onValueChange={setPaymentOption}
                           className='grid grid-cols-3 gap-3 items-center justify-between'
                        >
                           <ToggleGroup.Item
                              value='creditCard'
                              title='Cartão de crédito'
                              className={`flex items-center gap-1 p-3 uppercase text-sm text-base-text rounded-md ${
                                 paymentOption === 'creditCard'
                                    ? 'border border-purple bg-purple-light'
                                    : 'border bg-base-button'
                              }`}
                           >
                              <CreditCard size={16} className='text-purple' />
                              Cartão de crédito
                           </ToggleGroup.Item>
                           <ToggleGroup.Item
                              value='debitCard'
                              title='Cartão de débito'
                              className={`flex items-center gap-1 p-3 uppercase text-sm text-base-text rounded-md ${
                                 paymentOption === 'debitCard'
                                    ? 'border border-purple bg-purple-light'
                                    : 'border border-none bg-base-button'
                              }`}
                           >
                              <Bank size={16} className='text-purple' />
                              Cartão de débito
                           </ToggleGroup.Item>
                           <ToggleGroup.Item
                              value='money'
                              title='Dinheiro'
                              className={`flex items-center gap-1 p-3 uppercase text-sm text-base-text rounded-md ${
                                 paymentOption === 'money'
                                    ? 'border border-purple bg-purple-light'
                                    : 'border border-none bg-base-button'
                              }`}
                           >
                              <Money size={16} className='text-purple' />
                              Dinheiro
                           </ToggleGroup.Item>
                        </ToggleGroup.Root>
                     </div>
                  </div>
               </div>

               <div>
                  <b className='font-Baloo text-lg font-bold'>Cafés selecionados</b>
                  <CardCheckout />
               </div>
            </section>
         </div>
         <Footer />
      </>
   );
}
