import React from 'react'
import {Link, NavLink, withRouter } from "react-router-dom";


const Navbar= (props) => {
   // setTimeout(()=> {
     //     props.history.push('./about')
       // }, 2000);

    return(
       <nav className="nav-wrapper red darken-3">
           <div className="container">
               <a className="brand-logo">Poke'Times</a>
               <ul className="right">
                   <li><NavLink to="/">Home</NavLink> </li>
                   <li><NavLink to="/about">about</NavLink> </li>
                   <li><NavLink to="/contact">contact</NavLink> </li>
               </ul>
           </div>
       </nav>
    )
}
export default withRouter(Navbar)