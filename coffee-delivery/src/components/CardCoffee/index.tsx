import { Minus, Plus, ShoppingCart } from 'phosphor-react';

const cards = [
   {
      id: 1,
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      badge: 'Tradicional',
      price: 9.99,
      imgCoffee: 'coffee/expresso-tradicional.png',
   },
   {
      id: 2,
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      badge: 'Tradicional',
      price: 9.99,
      imgCoffee: 'coffee/expresso-americano.png',
   },
   {
      id: 3,
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      badge: 'Tradicional',
      price: 9.99,
      imgCoffee: 'coffee/expresso-cremoso.png',
   },
   {
      id: 4,
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      badge: 'Gelada',
      price: 9.99,
      imgCoffee: 'coffee/expresso-tradicional.png',
   },
   {
      id: 5,
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      badge: 'Com leite',
      price: 9.99,
      imgCoffee: 'coffee/cafe-com-leite.png',
   },
   {
      id: 6,
      title: 'Latte',
      description:
         'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      badge: 'Com leite',
      price: 9.99,
      imgCoffee: 'coffee/latte.png',
   },
   {
      id: 7,
      title: 'Capuccino',
      description:
         'Bebida com canela feita de doses iguais de café, leite e espuma',
      badge: 'Com leite',
      price: 9.99,
      imgCoffee: 'coffee/capuccino.png',
   },
   {
      id: 8,
      title: 'Macchiato',
      description:
         'Café expresso misturado com um pouco de leite quente e espuma',
      badge: 'Tradicional',
      price: 9.99,
      imgCoffee: 'coffee/macchiato.png',
   },
   {
      id: 9,
      title: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      badge: 'Tradicional',
      price: 9.99,
      imgCoffee: 'coffee/mocaccino.png',
   },
   {
      id: 10,
      title: 'Chocolate Quente',
      description:
         'Bebida feita com chocolate dissolvido no leite quente e café',
      badge: 'Especial',
      price: 9.99,
      imgCoffee: 'coffee/chocolate-quente.png',
   },
   {
      id: 11,
      title: 'Cubano',
      description:
         'Drink gelado de café expresso com rum, creme de leite e hortelã',
      badge: 'Alcoólico',
      price: 9.99,
      imgCoffee: 'coffee/cubano.png',
   },
   {
      id: 12,
      title: 'Havaiano',
      description:
         'Bebida adocicada preparada com café e leite de coco',
      badge: 'Alcoólico',
      price: 9.99,
      imgCoffee: 'coffee/havaiano.png',
   },
   {
      id: 13,
      title: 'Árabe',
      description:
         'Bebida preparada com grãos de café árabe e especiarias',
      badge: 'Especial',
      price: 9.99,
      imgCoffee: 'coffee/arabe.png',
   },
   {
    id: 14,
    title: 'Irlanês',
    description:
       'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    badge: 'Especial',
    price: 9.99,
    imgCoffee: 'coffee/irlandes.png',
 },
];

//Testar fazer um map no badge

export function CardCoffee() {
   return (
      <>
         {cards.map((card) => {
            return (
               <div
                  key={card.id}
                  className='flex flex-col w-64 justify-center items-center p-5 bg-base-card rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md mb-5'
               >
                  <img className='w-32 mt-[-45px] mb-3' src={card.imgCoffee} />
                  <span className='bg-yellow-light text-yellow-dark rounded-full font-bold text-[10px] uppercase px-2 py-1 mb-4'>
                     {card.badge}
                  </span>
                  <strong className='font-Baloo text-xl font-bold text-base-subtitle mb-2'>
                     {card.title}
                  </strong>
                  <p className='text-sm text-base-label text-center mb-8'>
                     {card.description}
                  </p>

                  <div className='flex gap-5'>
                     <span className='text-base-text text-sm'>
                        R${' '}
                        <b className='text-2xl font-Baloo font-extrabold'>
                           {card.price}
                        </b>
                     </span>

                     <div className='flex gap-2'>
                        <div className='flex items-stretch gap-2 bg-base-button rounded-md px-3 py-2'>
                           <button className='text-purple'>
                              <Minus size={14} weight='bold' />
                           </button>
                           <span className='text-base-title'>1</span>
                           <button className='text-purple'>
                              <Plus size={14} weight='bold' />
                           </button>
                        </div>

                        <button
                           className='bg-purple-dark text-base-card p-2 rounded-md hover:bg-purple transition-all'
                           title='Carrinho de compras'
                        >
                           <ShoppingCart size={20} weight='fill' />
                        </button>
                     </div>
                  </div>
               </div>
            );
         })}
      </>
   );
}
