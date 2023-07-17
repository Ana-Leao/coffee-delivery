import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import './styles/globalStyle.module.css';

export function App() {
   return (
      <>
         <Navbar />
         <Home />
      </>
   );
}
