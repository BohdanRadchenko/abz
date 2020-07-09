import React from "react";
import {Link} from 'react-scroll'
import css from './Actions.module.scss'

const Actions = () => {

    const Btn = ({children, scroll, event, disabled, styled}) => {

        return (
            <div className={css.container} onClick={event ? event : null}>
                {scroll && (
                    <Link to="form" smooth={true}
                          className={css.button}
                          style={styled}
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

    const Lnk = ({children, styled}) => {
        return (
            <div className={css.container}>
                <button
                    style={styled}
                    className={css.link}>
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