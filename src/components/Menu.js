import Botao from './Botao';

export default function Menu(props){
    return(
        <aside className="box">
            <Botao userName={props.userName} />
        </aside>
    )
};