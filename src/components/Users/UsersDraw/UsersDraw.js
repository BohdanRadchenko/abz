import React from "react";
import css from './UsersDraw.module.scss'

const UsersDraw = ({
        name,
        phone,
        photo,
        position,
        position_id,
        registration_timestamp,
        email
    }) => {
    return (
        <div>
            <p>{name}</p>
        </div>
    )
}

export default UsersDraw
