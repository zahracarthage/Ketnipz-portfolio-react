import React from 'react'
import kett from '../img/kett.png'; 
import {NavLink} from 'react-router-dom'; 

export default function NavBar() {
    return (

        <div className="NavBar">
            
         <nav className="nav">
            <div className="profile">
                <img src={kett} alt="ketnipz"/>
            </div>

            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName="active">
                        Home

                    </NavLink>

                    </li>
                    <li className="nav-item">
                    <NavLink to="/about" exact activeClassName="active">
                        About

                    </NavLink>

                </li>
                <li className="nav-item">
                    <NavLink to="/portfolio" exact activeClassName="active">
                        Portfolio

                    </NavLink>

                </li>

                <li className="nav-item">
                    <NavLink to="/Blogs" exact activeClassName="active">
                        Blogs

                    </NavLink>

                </li>
                <li className="nav-item">
                    <NavLink to="/Contact" exact activeClassName="active">
                        Contact

                    </NavLink>

                </li>

            

                
               

            </ul>
            
            <footer className="footer">
                <p>Ketnipz waz here</p>
            </footer>

        </nav>
      

        </div>
    )
}
