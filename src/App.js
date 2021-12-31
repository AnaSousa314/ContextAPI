import './App.css';

import Header from './components/Header';
import Menu from './components/Menu';
import Body from "./components/Body";

// import {UserProvider} from './contexts/UserContext';
import ThemeContext from './contexts/ThemeContext';
import UsersContext from './contexts/UsersContext';
import { useState } from 'react';

function App() {
  const [userName,setUserName] = useState('Ana');
  const [userEmail,setUserEmail] = useState('ana@email.com');
  return (
    <ThemeContext.Provider value="dark">
      {/* <UserProvider> */}
      <UsersContext.Provider value={{name: userName,email: userEmail}}>
        <div className="container">
        <ThemeContext.Consumer>
          {value=>(
            <div>
              Tema:{value}
            </div>
          )}
        </ThemeContext.Consumer>
          <Header/>
          <section>
            <Menu/>
            <Body setUserName={setUserName} userName={userName}/>
          </section>
        </div>
      </UsersContext.Provider>
      {/* </UserProvider> */}
    </ThemeContext.Provider>
  );
}

export default App;
