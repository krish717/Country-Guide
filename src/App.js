import { Outlet } from "react-router-dom";
import Header from './Components/Header.jsx';
import './style.css';
import { ThemeProvider } from './Contexts/ThemeContext.jsx'; // Updated path

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
