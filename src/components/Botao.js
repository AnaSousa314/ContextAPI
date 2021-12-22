import React, {useContext} from "react"
import { UserContext } from "../context/UserContext"

export default function Botao(props){
  const {userName} = useContext(UserContext);
  console.log(userName)
  return(
    <button >{userName}</button>
  )
};