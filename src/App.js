import './App.css';
import BaseFooter from './components/BaseFooter';
import NavBar from './components/NavBar';
import Router from './AllRoutes/RouterAll';
import Icons from './components/Icons';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Router />
        <Icons />
        <BaseFooter />
      </BrowserRouter>
    </div> 
  );
}

export default App;
