import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Productslist from './component/Productslist';
import Product from './component/Product';
import Footer from './component/Footer';
// import Cta from './component/Cta';
// import Support from './component/Support';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/products' element={<Productslist />} />
      <Route path='/products/:id' element={<Product />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
