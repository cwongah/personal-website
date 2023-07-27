import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="bg-[url('./backgroundForPw.png')] bg-cover bg-center h-screen">
      <div className='bg-teal-500 bg-opacity-[32%] min-h-screen'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
