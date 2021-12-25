import Botao from './Botao';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
import ThemingContext from "../contexts/ThemeContext";

export default function Body (props){

    const {onToggleUser,userName} = useContext(UserContext);

    // const handleButton = () => {
    //     // props.setUserName('Paulo');
    //     props.setUserName(prevState=> prevState === 'Ana' ? 'Paulo': 'Ana')
    // }

    return (
        <ThemingContext.Consumer>
          {value=>(
            <article className={`box theme-${value}`}>
                <Botao/>
                <button onClick={onToggleUser}>Trocar para {userName}</button>
            </article>
          )} 
        </ThemingContext.Consumer>
    );
}