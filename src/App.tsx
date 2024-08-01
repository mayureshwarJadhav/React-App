import './App.css';
import HelloWord from "./components/HelloWord";
import Counter from './counterComponents/Counter';
import DataFetcher from './dataFetcherComponents/DataFetcher';
import RegistrationForm from './formComponents/RegistrationForm';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pageComponents/Home';
import About from './pageComponents/About';
import Contact from './pageComponents/Contact';


function App() {
  return (
    <>
    <h1>React and Typescript using Vite</h1>
    <br />
      <div>
      <HelloWord />
      </div>
      
      <div>
      <Counter />
      </div>
      
      <div>
      <DataFetcher />
      </div>
      
      <div>
      <RegistrationForm />
      </div>

      <Router>
        <nav>
          <div className="flex space-x-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
             <Link to="/contact">Contact</Link>
          </div>
        </nav>
        <div className='p-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>


    </>
  );
}

export default App;
