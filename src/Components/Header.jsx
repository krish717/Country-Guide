
import { Link } from 'react-router-dom';
import useTheme from '../Hooks/useTheme';
 // Notice the curly braces

const Header = () => {
  const [isdark, setIsdark] = useTheme();

  return (
    <header className={`header-container ${isdark ? 'dark' : ''}`}>
      <div className="header-content">
        <h2 className="title"><Link to="/">Where in the world?</Link></h2>
        <p className="theme-changer" onClick={() => {
          setIsdark(!isdark);
          localStorage.setItem('isdarkMode', !isdark);
        }}>
          <i className={`fa-regular fa-${!isdark ? 'moon' : 'sun'}`}></i>&nbsp;&nbsp;{`${!isdark ? 'Dark' : 'Light'}`} Mode
        </p>
      </div>
    </header>
  );
}

export default Header;
