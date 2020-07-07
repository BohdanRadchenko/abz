import React from "react";
import arraySort from '../../../helpers/sort.helpers'
import UsersDraw from "../UsersDraw/UsersDraw";
import css from './UsersList.module.scss'

const UsersList = ({loading, users}) => {
    const sortUsers = arraySort(users.users)
    return (
        <div className={css.container}>
            <ul className={css.list}>
                {sortUsers.map(item => (
                    <li key={item.id} className={css.list__item}>
                        <UsersDraw {...item}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UsersList