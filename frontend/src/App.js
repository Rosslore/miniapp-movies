import React from 'react';
import MovieInfo from './pages/MovieInfo';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Search from './pages/Search';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<MovieInfo />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
