import React from "react";
import logo from '../../assets/logo.svg'
import BurgerButton from "../buttons/BurgerButton/BurgerButton";
import css from './Header.module.scss'
import {Link} from "react-scroll";

const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.container}>

                <div className={css.nav}>
                    <div>
                        <img src={logo} alt='logo'/>
                    </div>

                    <ul className={css.menu}>
                        <li className={css. menu__item}>
                            <Link to="form" smooth={true} className={css.menu__item__link}>
                               About me
                            </Link>
                        </li>
                        <li className={css. menu__item}>
                            <Link to="form" smooth={true} className={css.menu__item__link}>
                                Relationships
                            </Link>
                        </li>
                        <li className={css. menu__item}>
                            <Link to="form" smooth={true} className={css.menu__item__link}>
                                Requirements
                            </Link>
                        </li>
                        <li className={css. menu__item}>
                            <Link to="form" smooth={true} className={css.menu__item__link}>
                                Users
                            </Link>
                        </li>
                        <li className={css. menu__item}>
                            <Link to="form" smooth={true} className={css.menu__item__link}>
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
    )
}

export default Header
