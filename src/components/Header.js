import Botao from './Botao';

export default function Header(props){
    return(
      <header className="box">
        <Botao userName={props.userName} />
      </header>
    )
};