// import { UserContext } from "../contexts/UserContext"
import { useContext } from "react";
import UsersContext from "../contexts/UsersContext";
import ThemeContext from "../contexts/ThemeContext";
export default function Botao(props){
  // const {userName} = useContext(UserContext);
  // console.log(userName)

  const theme = useContext(ThemeContext);
  const user = useContext(UsersContext);

  return(
    <button>{user.name} - {theme}</button>
  
  )
};