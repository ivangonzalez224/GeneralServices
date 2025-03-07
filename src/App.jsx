import { Route, Routes } from 'react-router-dom';
import './App.css';
//import NavBar from './components/navbar';
import Inicio from './components/pages/main/Inicio';
import Footer from './components/Footer';

const App = () => (
  <div className="main-container">
    {/* <NavBar /> */}
    <section>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </section>
    <Footer />
  </div>

);

export default App;