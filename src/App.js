
import './App.css';
import {Link, Outlet} from "react-router-dom";

import React, { useState, useEffect, useReducer, useRef } from "react";

function Navigation () {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>);
}

export function Home(){
  return(
    <div>
      <Navigation />
      <h1>My website</h1>
    </div>
  )
}

export function About(){
  return (
    <div>
      <Navigation />
      <h1>About us</h1>
      <Outlet />
      </div>
  )
}

export function History(){
  return (
    <div> 
      <h1>Our history </h1>
      </div>
  )
}

export function Contact(){
  return (
    <div>
      <Navigation />
      <h1>Contact us</h1>
    </div>
  )
}

export function App() {
  return <Home />
}


