// import { UserContext } from "../contexts/UserContext"
import UsersContext from "../contexts/UsersContext";
import ThemeContext from "../contexts/ThemeContext";
export default function Botao(props){
  // const {userName} = useContext(UserContext);
  // console.log(userName)

  return(
    <UsersContext.Consumer>
      {value=>(
        <ThemeContext.Consumer>
          {themeValue=>(
            <button>{value.name} - {themeValue}</button>
          )}
        </ThemeContext.Consumer>
      )}
    </UsersContext.Consumer>
  
  )
};