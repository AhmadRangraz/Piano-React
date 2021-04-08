// import React {Component} from 'react'
import './App.css';
import React ,{ Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import Piano from './Piano/Piano.jsx'
import Home from './Home/Home'
import Teacher from './teacher/teacher'
export default class App extends Component{
  render(){
    return(
      <main>
        <BrowserRouter>
        <h1>wtf</h1>
        {/* <Piano></Piano> */}
      <Route path='Piano-React/free-Mode' component={Piano}></Route>
      <Route path='Piano-React/' exact component={Home}></Route>
      <Route path='Piano-React/teacher'  component={Teacher}></Route>
        </BrowserRouter>
      </main>
    )
  }
}


