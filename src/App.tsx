import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="App telegram-style">
        <Navbar></Navbar>
        <AppRouter></AppRouter>
    </div>
  );
}

export default App;
