import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import Home from './pages/home/Home'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path={"/"} element={<Home />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
