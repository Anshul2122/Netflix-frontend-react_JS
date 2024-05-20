import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./componentes/Home/Home";
import Header from './componentes/Header/Header';

import Footer from './componentes/Footer'
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
      
    </Router>
    
  );
}

export default App;
