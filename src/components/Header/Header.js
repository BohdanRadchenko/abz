import React from "react";
import logo from '../../assets/logo.svg'
import BurgerButton from "../buttons/BurgerButton/BurgerButton";
import {Link, Element} from "react-scroll";
import css from './Header.module.scss'

const Header = () => {
    return (
        <Element name='home'>
            <header className={css.header}>
                <div className={css.container}>

                    <div className={css.nav}>
                        <Link to="home" smooth={true} offset={-60} className={css.nav__logo}>
                            <img src={logo} alt='logo'/>
                        </Link>

                        <ul className={css.menu}>
                            <li className={css.menu__item}>
                                <Link to="form" smooth={true} activeClass={css.menu__item__link__active}
                                      className={css.menu__item__link}>
                                    About me
                                </Link>
                            </li>
                            <li className={css.menu__item}>
                                <Link to="form" smooth={true} activeClass={css.menu__item__link__active}
                                      className={css.menu__item__link}>
                                    Relationships
                                </Link>
                            </li>
                            <li className={css.menu__item}>
                                <Link to="form" smooth={true} activeClass={css.menu__item__link__active}
                                      className={css.menu__item__link}>
                                    Requirements
                                </Link>
                            </li>
                            <li className={css.menu__item}>
                                <Link to="users" smooth={true} activeClass={css.menu__item__link__active}
                                      className={css.menu__item__link}>
                                    Users
                                </Link>
                            </li>
                            <li className={css.menu__item}>
                                <Link to="form" smooth={true} activeClass={css.menu__item__link__active}
                                      className={css.menu__item__link}>
                                    Sign Up
                                </Link>
                            </li>
                        </ul>

                        <div className={css.burgerButton}>
                            <BurgerButton/>
                        </div>
                    </div>
                </div>
            </header>
        </Element>
    )
}

export default Header
