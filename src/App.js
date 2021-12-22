import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Menu from './components/Menu';
import Body from "./components/Body";

function App() {
  const [userName,setUserName] = useState('Ana')
  return (
    <div className="container">
      <Header userName={userName}/>
      <section>
        <Menu userName={userName}/>
        <Body userName={userName} setUserName={setUserName}/>
      </section>
    </div>
  );
}

export default App;
