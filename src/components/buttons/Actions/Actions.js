import React from "react";
import {Link} from 'react-scroll'
import css from './Actions.module.scss'

const Actions = () => {

    const Btn = ({children, scroll, event, disabled}) => {

        return (
            <div className={css.container} onClick={event ? event : null}>
                {scroll && (
                    <Link to="form" smooth={true}
                          className={css.button}
                    >
                        {children}
                    </Link>
                )}
                {!scroll && (
                    <button
                        className={disabled ? css.button__disabled : css.button}
                    >
                        {children}
                    </button>
                )}
            </div>
        )
    }

    const Lnk = ({children}) => {
        return (
            <div className={css.container}>
                <button className={css.link}>
                    <Link to="form" smooth={true} className={css.btnLink}>
                        {children}
                    </Link>
                </button>
            </div>
        )
    }

    return {
        Btn,
        Lnk
    }
}

export default Actions