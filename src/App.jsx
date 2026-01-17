import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './pages/Inicio';

const App = () => (
  <Suspense fallback={<div>Cargando...</div>}>
    <Routes>
      <Route path="/" element={<Inicio />} />
    </Routes>
  </Suspense>
);

export default App;