import './App.css';
import BaseFooter from './components/BaseFooter';
import NavBar from './components/NavBar';
import Router from './AllRoutes/RouterAll';
import Icons from './components/Icons';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router />
      <Icons />
      <BaseFooter />
    </div> 
  );
}

export default App;
