import './App.css';

import Header from './components/Header';
import Menu from './components/Menu';
import Body from "./components/Body";

import {UserProvider} from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="container">
        <Header/>
        <section>
          <Menu/>
          <Body/>
        </section>
      </div>
    </UserProvider>
  );
}

export default App;
