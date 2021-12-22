import Botao from './Botao';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

export default function Body (props){

    const {onToggleUser,userName} = useContext(UserContext);

    // const handleButton = () => {
    //     // props.setUserName('Paulo');
    //     props.setUserName(prevState=> prevState === 'Ana' ? 'Paulo': 'Ana')
    // }

    return (
        <article className="box">
            <Botao/>
            <button onClick={onToggleUser}>Trocar para {userName}</button>
        </article>
    );
}