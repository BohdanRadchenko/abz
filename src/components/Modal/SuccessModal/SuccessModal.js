import React from "react";
import {connect} from 'react-redux'
import {successModalClose} from '../../../redux/controller/controllerActions'
import css from './SuccessModal.module.scss'

const SuccessModal = ({onClose}) => {

    const handleClose = e => {
        onClose()
    }
    return (
        <div className={css.modal}>
            <div className={css.container}>

                <div className={css.header}>
                    <h1 className={css.header__title}>
                        Congratulations
                    </h1>
                    <button className={css.header__button}
                            onClick={e => handleClose(e)}>
                        <div className={css.header__button__one}/>
                        <div className={css.header__button__two}/>
                    </button>
                </div>

                <div className={css.main}>
                    <p className={css.main__desc}>
                        You have successfully passed the registration
                    </p>
                </div>

                <div className={css.footer}>
                    <button className={css.footer__button}
                            onClick={e => handleClose(e)}>
                        Great
                    </button>

                </div>

            </div>
        </div>
    )
}

const mDTP = {
    onClose: successModalClose
}

export default connect(null, mDTP)(SuccessModal)