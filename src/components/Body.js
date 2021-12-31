import { useContext } from 'react';
import Botao from './Botao';
import ThemeContext from "../contexts/ThemeContext";

export default function Body (props){

    // const {onToggleUser,userName} = useContext(UserContext);
    console.log(props)

    const theme = useContext(ThemeContext)

    const handleButton = () => {
        // props.setUserName('Paulo');
        props.setUserName(prevState=> prevState === 'Ana' ? 'Paulo': 'Ana')
    }

    return (
      <article className={`box theme-${theme}`}>
      <Botao/>
      {/* <button onClick={onToggleUser}>Trocar para {userName}</button> */}


      <button onClick={handleButton}>Trocar para {props.userName === 'Ana' ? 'Paulo':'Ana'}</button>
      {console.log(props.userName)}
      {/* { console.log(tehem)} */}
  </article>
    );
}