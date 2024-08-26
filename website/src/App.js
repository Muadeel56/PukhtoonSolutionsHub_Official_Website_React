import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Services from './pages/services';

function App() {
  return (
    <div className='relative w-screen min-h-full bg-gradient-to-r from-black via-black to-red-800 '>
      <Navbar/>
      <HomePage />
      <Footer/>
      <Services />
    </div>
  );
}

export default App;
