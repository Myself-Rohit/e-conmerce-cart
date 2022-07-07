import React from 'react'
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import Cards from './components/Cards';
import CardsDetails from './components/CardsDetails';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetails/>}/>
      </Routes>
    </div>
  )
}
export default App;