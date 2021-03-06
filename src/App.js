import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header"
import Sessions from './components/Sessoes';
import RenderMovies from './Rendermovies';
import Seats from './Seats';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<RenderMovies />} />
          <Route path='/sessoes/:idFilme' element={<Sessions />} />
          <Route path='/assentos/:idSessao' element={<Seats />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}