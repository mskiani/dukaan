import { useState } from 'react';
import './App.css';
import FundUs from './pages/fundus';
import MainPage from './pages/MainPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  const [page, setPage] = useState("Home");
  return (
    <div className="App">
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        
         
          <Route path="/fundus" element={<FundUs />} />
       
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
