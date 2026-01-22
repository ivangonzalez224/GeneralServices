import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './pages/Inicio';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

const App = () => (
  <Suspense fallback={<div>Cargando...</div>}>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/privacidad" element={<PrivacyPolicy />} />
      <Route path="/terminos" element={<TermsAndConditions />} />
    </Routes>
  </Suspense>
);

export default App;