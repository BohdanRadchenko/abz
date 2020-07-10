import React from "react";
import tooltips from '../../../helpers/tooltips.helpers'
import css from './UsersDraw.module.scss'

const UsersDraw = ({
                       name,
                       phone,
                       photo,
                       position,
                       email
                   }) => {
    const tipsEmail = tooltips(email)
    return (
        <div className={css.container}>
            <div className={css.photoWrapper}>
                <img className={css.avatar} src={photo} alt="avatar"/>
            </div>
            <p className={css.name} style={ name.length > 20 ? {marginBottom : "10px"} : null}>{name}</p>
            <p className={css.position}>{position}</p>
            <p className={css.email}
               style={tipsEmail.long ? {cursor: 'pointer'} : null}
            >
                {tipsEmail.text}
                {tipsEmail.long ? <span className={css.toolTips}>
                    {email}
                </span> : null}
            </p>
            <p className={css.phone}>{phone}</p>
        </div>
    )
}

export default UsersDraw
