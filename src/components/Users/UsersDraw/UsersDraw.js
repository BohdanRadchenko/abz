import React from "react";
import css from './UsersDraw.module.scss'

const UsersDraw = ({
                       name,
                       phone,
                       photo,
                       position,
                       email
                   }) => {
    return (
        <div className={css.container}>
            <div className={css.photoWrapper}>
                <img className={css.avatar} src={photo} alt="avatar"/>
            </div>
            <p className={css.name}>{name}</p>
            <p className={css.position}>{position}</p>
            <p className={css.email}>{email}</p>
            <p className={css.phone}>{phone}</p>
        </div>
    )
}

export default UsersDraw
