import React , { Component} from "react";
import {Link} from 'react-scroll';

const Navbar = (props) =>{


    const [BurgerActive, setBurgerActive] = React.useState(false)

    const Burger = () => {
        if (BurgerActive){
            setBurgerActive(false)
        }else{
            setBurgerActive(true)
        }
    }

    const DisactiveBurger = () => {
        setBurgerActive(false)
    }
    return(
        <header className="header" >
            <nav>
                <a href='#' className={BurgerActive ? "header_toggle hide_for_desktop open": "header_toggle hide_for_desktop"} type="button" onClick={Burger}>
                    <div className={BurgerActive ? "overlay fade-in": "overlay fade-out has-fade"} type="button" onClick={Burger}></div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>

                <div className="header_links hide_for_mobile">
                    {props.Data.Content.map((item,index) => {
                        return(
                            <a href={item.url} key={index} >
                                <Link  to={item.url} smooth={true} duration={500}>
                                    {item.title}
                                </Link>
                            </a>
                        )
                    })}
                </div>
            </nav>

            <div className={BurgerActive ? "header_menu hide_for_desktop": "header_menu has-fade"} type="button" onClick={Burger}>
                {props.Data.Content.map((item,index) => {
                    return(
                        <a href={item.url} key={index} onClick={DisactiveBurger}>
                            <Link  to={item.url} smooth={true} duration={500} onClick={DisactiveBurger}>
                                {item.title}
                            </Link>
                        </a>
                    )
                })}
            </div>
        </header>
    )
}

export default Navbar