import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';


function SwitchButton() {
  const theme = useContext(ThemeContext);

  function toggleTheme() {
    theme.setIsDark(!theme.isDark);
  }

  return (
    <button 
      className='btn btn-primary btn-sm mb-2 ml-0' 
      onClick={() => toggleTheme()}
    >
      Switch Mode
    </button>
  );
}


export { SwitchButton };