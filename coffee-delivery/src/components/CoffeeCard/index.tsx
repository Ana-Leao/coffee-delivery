const coffees = [
   {
      id: 1,
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      badge: 'Tradicional' || 'Com leite' || 'Gelado',
   },
   {
      id: 2,
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      badge: 'Tradicional' || 'Com leite' || 'Gelado',
   },
   {
      id: 3,
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      badge: 'Tradicional' || 'Com leite' || 'Gelado',
   },
];

export function CoffeeCard() {
   return (
      <div>
         {coffees.map((coffee) => (
            <h1>{coffee.title}</h1>
         ))}
      </div>
   );
}
