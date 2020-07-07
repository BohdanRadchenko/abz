import React from "react";
import logo from '../../assets/logo.svg'
import BurgerButton from "../buttons/BurgerButton/BurgerButton";
import css from './Header.module.scss'

const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.container}>

                <div className={css.nav}>
                    <div>
                        <img src={logo} alt='logo'/>
                    </div>
                    <div>
                        <BurgerButton/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
