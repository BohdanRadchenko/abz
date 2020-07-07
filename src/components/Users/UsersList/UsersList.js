import React from "react";
import arraySort from '../../../helpers/sort.helpers'
import UsersDraw from "../UsersDraw/UsersDraw";
import Actions from "../../buttons/Actions/Actions";
import css from './UsersList.module.scss'

const UsersList = ({loading, users}) => {
    const {Btn} = Actions()
    const sortUsers = arraySort(users.users)

    const handleMoreClick = e => {
        console.log('handleMoreClick')
    }

    return (
        <div className={css.container}>
            <ul className={css.list}>
                {sortUsers.map(item => (
                    <li key={item.id}  className={css.list__item}>
                        <UsersDraw {...item}/>
                    </li>
                ))}
            </ul>

            <Btn onClick={handleMoreClick}>
                Show More
            </Btn>

        </div>
    )
}

export default UsersList