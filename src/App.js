import './App.css';

import Header from './components/Header';
import Menu from './components/Menu';
import Body from "./components/Body";

import {UserProvider} from './contexts/UserContext';
import ThemingContext from './contexts/ThemeContext';

function App() {
  return (
    <ThemingContext.Provider value="dark">
      {/* <UserProvider> */}
        <div className="container">
        <ThemingContext.Consumer>
          {value=>(
            <div>
              Tema:{value}
            </div>
          )}
        </ThemingContext.Consumer>
          <Header/>
          <section>
            <Menu/>
            <Body/>
          </section>
        </div>
      {/* </UserProvider> */}
    </ThemingContext.Provider>
  );
}

export default App;
