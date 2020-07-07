import React, {useEffect, useRef} from 'react';
import {scroller} from 'react-scroll'
import {connect} from 'react-redux'
import {burgerMenuClose} from '../../redux/controller/controllerActions'
import {burgerMenu} from '../../redux/controller/controllerSelectors'
import logo from '../../assets/logo.svg'
import css from './BurgerMenu.module.scss'

const BurgerMenu = ({onClose, isOpen}) => {

    const backdropRef = useRef()

    useEffect(() => {
        const body = document.querySelector('body')
        if (isOpen) {
            body.style.overflow = "hidden"
        }
        return () => {
            body.style.overflow = "auto"
        }
    })

    const handleBackdropClick = e => {
        const {current} = backdropRef
        if (current && e.target !== current) {
            return
        }
        onClose()
    };

    const handleClickButton = e => {
        onClose()
        scroller.scrollTo('form', {
            duration: 1500,
            offset: 50,
            smooth: true,
        })
    }

    return (
        <>
            {isOpen && (
                <div
                    className={css.backdrop}
                    ref={backdropRef}
                    onClick={handleBackdropClick}
                >
                    <div className={css.menu}>

                        <div className={css.menu__header}>
                            <img src={logo} alt='logo' className={css.logo}/>
                        </div>

                        <ul className={css.section}>
                            <li className={css.section__item}>
                                <button
                                    onClick={e => handleClickButton(e)}
                                    className={css.section__item__button}>
                                    About me
                                </button>
                            </li>
                            <li className={css.section__item}>
                                <button
                                    onClick={e => handleClickButton(e)}
                                    className={css.section__item__button}>
                                    Relationships
                                </button>
                            </li>
                            <li className={css.section__item}>
                                <button
                                    onClick={e => handleClickButton(e)}
                                    className={css.section__item__button}>
                                    Users
                                </button>
                            </li>
                            <li className={css.section__item}>
                                <button
                                    onClick={e => handleClickButton(e)}
                                    className={css.section__item__button}>
                                    Sign Up
                                </button>
                            </li>
                            <li className={css.section__item}>
                                <button
                                    onClick={e => handleClickButton(e)}
                                    className={css.section__item__button}>
                                    Terms and Conditions
                                </button>
                            </li>
                        </ul>

                        <ul className={css.section}>
                            <li className={css.section__item}>
                                <button
                                    onClick={e => handleClickButton(e)}
                                    className={css.section__item__button}>
                                    How it works
                                </button>
                            </li>
                            <li className={css.section__item}>
                                <button
                                    onClick={e => handleClickButton(e)}
                                    className={css.section__item__button}>
                                    Partnership
                                </button>
                            </li>
                            <li className={css.section__item}>
                                <button
                                    onClick={e => handleClickButton(e)}
                                    className={css.section__item__button}>
                                    Help
                                </button>
                            </li>
                            <li className={css.section__item}>
                                <button
                                    onClick={e => handleClickButton(e)}
                                    className={css.section__item__button}>
                                    Leave testimonial
                                </button>
                            </li>
                            <li className={css.section__item}>
                                <button
                                    onClick={e => handleClickButton(e)}
                                    className={css.section__item__button}>
                                    Contact us
                                </button>
                            </li>
                        </ul>

                        <ul className={css.section}>
                            <li className={css.section__item}>
                                <button
                                    onClick={e => handleClickButton(e)}
                                    className={css.section__item__button}>
                                    Articles
                                </button>
                            </li>
                            <li className={css.section__item}>
                                <button
                                    onClick={e => handleClickButton(e)}
                                    className={css.section__item__button}>
                                    Testimonials
                                </button>
                            </li>
                            <li className={css.section__item}>
                                <button
                                    onClick={e => handleClickButton(e)}
                                    className={css.section__item__button}>
                                    Licenses
                                </button>
                            </li>
                            <li className={css.section__item}>
                                <button
                                    onClick={e => handleClickButton(e)}
                                    className={css.section__item__button}>
                                    Privacy Policy
                                </button>
                            </li>
                        </ul>


                    </div>
                </div>
            )}
        </>
    )
}

const mSTP = state => ({
    isOpen: burgerMenu(state)
})

const mDTP = {
    onClose: burgerMenuClose
}

export default connect(mSTP, mDTP)(BurgerMenu)
