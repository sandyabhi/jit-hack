import React from 'react'
import './App.css';
import Home from "./pages/Home"
import {  BrowserRouter as Router,  Switch,  Route,} from "react-router-dom";
import NavBar from './components/NavBar';
import Register from "./pages/Register"
import About from "./pages/About"
import More from "./pages/More"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Switch>       
        <Route exact path="/register" component={Register} />
        <Route  path="/about" component={About} />
        <Route  path="/more" component={More} />
        <Route  path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}
