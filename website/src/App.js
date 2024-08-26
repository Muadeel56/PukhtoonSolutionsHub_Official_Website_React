import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='w-screen h-screen bg-gradient-to-r from-black via-black to-red-800 '>
      <Navbar/>
      <HomePage />
    </div>
  );
}

export default App;
