import { Navbar } from '../../components/Navbar';

export function Home() {
   return (
      <div className='layout-container'>
         <Navbar />
         <header className='bg-yellow-light h-[100vh]'>
            <h1>header</h1>
         </header>
      </div>
   );
}
