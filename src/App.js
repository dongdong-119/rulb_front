import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';



function App() {
  
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
