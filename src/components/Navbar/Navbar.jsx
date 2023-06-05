import React,  {useState}from "react";
import './navbar.css';
import '../Navbar/navbar.scss';
import {SiYourtraveldottv} from 'react-icons/si' ;
import {RxCrossCircled} from 'react-icons/rx' ;
import {TbGridDots} from 'react-icons/tb' ;

const Navbar = () => {
    const [active, setActive] = useState('navbar')
    // function to toggle navbar
    const showNav = ()=> {
        setActive('navbar activeNavbar')
    }
    // function to remove navbar
    const removeNav = ()=> {
        setActive('navbar')
    }
    return (
       
        <section className="navBarSection">
            <header className=" header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><SiYourtraveldottv
                         className = "icon" /> Travel.</h1>
                    </a>
                </div>
                <div className=  {active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>


                        <li className="navItem">
                            <a href="#" className="navLink">Packages</a>
                        </li>


                        <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li>


                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>


                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>


                        <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li>


                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>
                    <button className="btn">
                        <a href="#"> BOOK NOW</a>
                    </button>

                    </ul>

                <div  onClick={removeNav}
                    className="closeNavbar">
                        <RxCrossCircled className = "icon"/>
                    </div>
                    </div>
                <div  onClick={showNav}
                 className="toggleNavbar">
                    <TbGridDots className = "icon" />
                </div>
            
            </header>
        </section>
       
    )
}

export default Navbar;