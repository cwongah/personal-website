import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const [scrollTo, setScrollTo] = useState()
  return (
    <div className="bg-[url('./backgroundForPw.png')] bg-cover bg-center h-screen">
      <img src='./backgroundForPw.png' alt='bgImage' />
      <div className='bg-purple-500 bg-opacity-[32%] min-h-screen'>
        <Navbar setScrollTo={setScrollTo} scrollTo={scrollTo} />
        <Home setScrollTo={setScrollTo} scrollTo={scrollTo} />
      </div>
    </div>
  );
}

export default App;
