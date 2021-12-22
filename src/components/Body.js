import Botao from './Botao';

// eslint-disable-next-line import/no-anonymous-default-export
export default function Body (props){
    const handleButton = () => {
        // props.setUserName('Paulo');
        props.setUserName(prevState=> prevState === 'Ana' ? 'Paulo': 'Ana')
    }

    return (
        <article className="box">
            <Botao userName={props.userName} />

            <button onClick={handleButton}>Trocar para {props.userName}</button>
        </article>
    );
}