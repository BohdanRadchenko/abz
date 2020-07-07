import React from "react";
import {connect} from 'react-redux'
import {burgerMenuOpen} from '../../../redux/controller/controllerActions'
import css from './BurgerButton.module.scss'

const BurgerButton = ({handleBurgerOpen}) => {
    return (
        <div className={css.container}>
            <button onClick={handleBurgerOpen} className={css.burgerButton}>
                <div className={css.buttonOne}/>
                <div className={css.buttonTwo}/>
                <div className={css.buttonThree}/>
            </button>
        </div>
    )
}

const mDTP = {
    handleBurgerOpen: burgerMenuOpen,
}

export default connect(null, mDTP)(BurgerButton)