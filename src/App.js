import './App.css';
import Banner from './components/Banner';
import Header from './components/Headers';
import Hero from './components/Hero';
import User from './components/User';
import BannerTwo from './components/BannerTwo';
import Product from './components/Product';
import Market from './components/Market';


function App() {
  return (
    <div className="App bg-[#fdf4e6] h-screen overflow-y-scroll ">
     
     <Header />
     <Hero />
     <Banner />
     <User />
     <BannerTwo />
     <Product />
     <Market />
     
    </div>
  );
}

export default App;
