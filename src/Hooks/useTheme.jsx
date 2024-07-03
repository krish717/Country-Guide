import  { useContext } from 'react'
import { ThemeContext } from "../Contexts/ThemeContext.jsx";
 const useTheme = () => {
    const [isdark,setIsdark] = useContext(ThemeContext);
  return (
    [isdark,setIsdark] 
  )
}

export default useTheme;
