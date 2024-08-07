/*import logo from './logo.svg';
import './App.css';
import Myfirstcomponent from './components/firstcomponent';
import FuncComp from './components/fucomponent';
function App() {
  return (
    <div className="App">
      <Myfirstcomponent/>
      <FuncComp/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
import logo from "./logo.svg";
import "./App.css";
import Myfirstcomponent from "./components/firstcomponent";
import Funcom from "./components/firstcomponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Myclasscomponent from "./components/classcomponent";
import Navbar from "./components/contact";
import About from "./components/about";
import Home from "./components/home";
import Navigate from "./components/task1";
import Sideffect from "./components/useEffect";
function App() {
  return (







    <div className="St">
      <BrowserRouter>
      <Navigate />
 
    <Routes>
      <Route path="/reg" element={ <Home/> }></Route> 

      <Route path="/log" element={ <About/> } ></Route>
      <Route path="/con" element={ <Navbar/> }></Route>
      <Route path="/co" element={ <Sideffect/> }></Route>
     
    </Routes>
  
</BrowserRouter>
    </div>










    /*<div>
<BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={ <Home/> }></Route>
      <Route path="/about" element={ <About/> }></Route>
      <Route path="/fun" element={<Funcom/>}></Route>
      <Route path="/comp" element={<Myclasscomponent />}></Route>
      <Route></Route>
    </Routes>
  
</BrowserRouter>
    </div>
    /*
    <div>
      <Funcom name="SRI Ishwarya"/>
    </div>
    /*<div className="App">
      <Myfirstcomponent/>
       <Funcom/>
             <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;


