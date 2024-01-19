import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContext } from './context/contextApi';
import './index.css';

import Header from './components/Header';
import Feed from './components/Feed';
import SearchResult from './components/SearchResult';
import VideoDetails from './components/VideoDetails';

const App = () => {
  
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/SearchResult/:searchQuery" element={<SearchResult />} />
            <Route path="/video/:id" element={< VideoDetails />} />
          </Routes>

        </div>
      </BrowserRouter>
    </AppContext>

  )
}

export default App
