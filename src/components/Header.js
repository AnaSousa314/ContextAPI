import Botao from './Botao';

import ThemingContext from '../contexts/ThemeContext';

export default function Header(props){
    return(
      <ThemingContext.Consumer>
      {value=>(
        <header className={`box theme-${value}`}>
          <Botao/>
        </header>
      )}
      </ThemingContext.Consumer>
    )
};