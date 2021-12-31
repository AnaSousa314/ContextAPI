import { useContext } from 'react';
import Botao from './Botao';

import ThemeContext from '../contexts/ThemeContext';

export default function Header(props){
  const theme = useContext(ThemeContext);
    return(
      <header className={`box theme-${theme}`}>
        <Botao/>
      </header>
    )
};