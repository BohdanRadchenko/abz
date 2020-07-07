import React from "react";
import css from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.container}>
                <p className={css.text}>
                    <span>&copy;</span>
                    abz.agency specially for the test task
                </p>
            </div>
        </footer>
    )
}

export default Footer