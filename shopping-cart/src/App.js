import Header from './components/Header';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
