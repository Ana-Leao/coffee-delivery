import { Minus, Plus, Trash } from 'phosphor-react';

export function CardCheckout() {
   return (
      <>
         <div className='flex flex-col items-center p-10 bg-base-card rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md mb-5  mt-4'>
            <div className='w-[368px] flex justify-between items-start border-b border-base-button pb-6 mb-6'>
               <img
                  src='coffee/expresso-tradicional.png'
                  alt='Café'
                  className='w-16'
               />
               <div>
                  <p className='text-base-subtitle mb-2'>
                     Expresso tradicional
                  </p>

                  <div className='flex items-center gap-2'>
                     <div className='flex items-center gap-2 w-[72px] h-8 bg-base-button rounded-md px-3 py-2'>
                        <button className='text-purple'>
                           <Minus size={14} weight='bold' />
                        </button>
                        <span className='text-base-title'>1</span>
                        <button className='text-purple'>
                           <Plus size={14} weight='bold' />
                        </button>
                     </div>
                     <button className='flex items-center gap-1 h-8 bg-base-button rounded-md px-3 py-2 text-base-text'>
                        <Trash
                           size={14}
                           weight='bold'
                           className='text-purple'
                        />
                        Remover
                     </button>
                  </div>
               </div>
               <b className='font-bold text-base-text'>R$9.99</b>
            </div>

            <div className='w-[368px] text-base-text mb-6'>
               <span className='flex justify-between mb-3'>
                  <p className='text-sm'>Total de itens</p>
                  <p className='text-sm'>R$9,99</p>
               </span>
               <span className='flex justify-between mb-3'>
                  <p className='text-sm'>Entrega</p>
                  <p className='text-sm'>R$3,50</p>
               </span>
               <span className='flex justify-between mb-3'>
                  <p className='text-xl font-bold'>Total</p>
                  <p className='text-xl font-bold'>R$3,50</p>
               </span>
            </div>

            <button className='w-[368px] p-3 bg-yellow uppercase font-bold rounded-md text-white'>Confirmar pedido</button>
         </div>
      </>
   );
}
