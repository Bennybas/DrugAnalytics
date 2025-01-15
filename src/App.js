import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          {/* <Route path="/executive-dashboard" element={<ExecutiveDashboard />} />
          <Route path="/global-dashboard" element={<GlobalDashboard />} /> */}
          {/* <Route path="/market-dashboard" element={<MarketDashboard />} /> */}
        </Routes>
    </BrowserRouter>
  );
};

export default App;