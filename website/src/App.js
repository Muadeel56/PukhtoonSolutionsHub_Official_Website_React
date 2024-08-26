import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className='w-screen h-full bg-gradient-to-r from-black via-black to-red-800 '>
      <Navbar/>
      <HomePage />
      <Footer/>
    </div>
  );
}

export default App;
