import React, {useState,createContext} from 'react';

export const UserContext = createContext('Ana');

export function UserProvider(props){
  const [userName,setUserName] = useState('Ana');

  function handleButton(){
    setUserName(prevState=> prevState === 'Ana' ? 'Paulo': 'Ana')
  }

  return(
    <UserContext.Provider value={{userName,onToggleUser:handleButton}}>
      {props.children}
    </UserContext.Provider>
  )
}