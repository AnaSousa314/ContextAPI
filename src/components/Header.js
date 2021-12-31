import Botao from './Botao';

import ThemeContext from '../contexts/ThemeContext';

export default function Header(props){
    return(
      <ThemeContext.Consumer>
      {value=>(
        <header className={`box theme-${value}`}>
          <Botao/>
        </header>
      )}
      </ThemeContext.Consumer>
    )
};