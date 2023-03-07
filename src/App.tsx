import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './routers/AppRouter';
import { ThemeProvider } from './theme/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <AppRouter/>
    </ThemeProvider>
  );
}

export default App;
