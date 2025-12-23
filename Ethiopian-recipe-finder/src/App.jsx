

import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Recipes from './Pages/Recipes';
import Settings from './Pages/Settings';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>


      </div>
      <Footer />
    </Router>

  );
}

export default App;






