import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { teal } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material';

const defaultTheme = createTheme({
  palette: {
    primary: teal,
    secondary: {
      main: '#70c4bc',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>

          <main>
            <Routes>
               <Route path="/" element={<Home/>} />
              
            </Routes>
            </main>

          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
