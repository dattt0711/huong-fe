import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarCommon from './pages/Home/components/Navbar';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import Product from './pages/Product/Product';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import DetailProduct from './pages/DetailProduct/DetailProduct';
import DetailNews from './pages/DetailNews/DetailNews';

function App() {
  return (
    <div className="App primary-background">
      <NavbarCommon />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/detail/:id" element={<DetailProduct />} />
        <Route path="/news/detail/:id" element={<DetailNews />} />
      </Routes>
    </div>
  );
}

export default App;
