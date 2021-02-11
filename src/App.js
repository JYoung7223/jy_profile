import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {NavBar} from "./components/NavBar";
import {Projects} from "./components/Projects";

function App() {
  return (
    <>
      <Header/> 
      <NavBar/>     
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;
