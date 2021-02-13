import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import { } from "react-router-hash";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {NavBar} from "./components/NavBar";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {Projects} from "./components/Projects";

function App() {
  return (
    <>
      <Header/>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar/>     
        <Route exact path="/" component={About} />
        <Route exact path="/recent-projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Router> 
      <Footer/>
    </>
  );
}

export default App;
