import React from "react";
import {connect} from 'react-redux'
import {Element} from 'react-scroll'
import css from './RegistrationForm.module.scss'


const RegistrationForm = () => {
    return (
        <Element name="form" className="element">
            <section className={css.section}>
                <div className={css.container}>
                    Registration Form
                </div>
            </section>
        </Element>
    )
}

const mSTP = state => ({})

const mDTP = {}


export default connect(mSTP, mDTP)(RegistrationForm)