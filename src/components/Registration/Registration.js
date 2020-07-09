import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {handlePositions, handleToken} from '../../redux/controller/controllerOperations'
import {positions, token} from '../../redux/controller/controllerSelectors'
import {Element} from 'react-scroll'
import Form from "./Form/Form";
import css from './Registration.module.scss'


const Registration = ({getPositions, positions, token, getToken}) => {

    useEffect(() => {
        getPositions()
        getToken()
    }, [getPositions, getToken])

    return (
        <Element name="form" className="element">
            <section className={css.section}>
                <div className={css.container}>

                    <div className={css.textWrapper}>
                        <h1 className={css.title}>
                            Register to get a work
                        </h1>
                        <p className={css.attention}>
                            Attention! After successful registration and alert, update the list of users in the block
                            from
                            the top
                        </p>
                    </div>


                    {positions && !!positions.length && (
                        <Form
                            positions={positions}
                            token={token}/>
                    )}

                </div>
            </section>
        </Element>
    )
}

const mSTP = state => ({
    positions: positions(state),
    token: token(state)
})

const mDTP = {
    getPositions: handlePositions,
    getToken: handleToken
}


export default connect(mSTP, mDTP)(Registration)