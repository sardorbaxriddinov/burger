import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Menu from "./components/Menu";
import Todos from "./components/Todos";
import Comments from "./components/Comments";
import Posts from "./components/Posts";
import LangThemeProvider from "./context/LangThemeContext";
import Header from "./components/Header";

function App() {
  return (
    <LangThemeProvider> 
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Router>
    </LangThemeProvider>
  );
}

export default App;



