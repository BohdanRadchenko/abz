import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {loading, users} from '../../redux/users/usersSelectors'
import {handleUsers} from '../../redux/users/usersOperations'
import Actions from "../buttons/Actions/Actions";
import UsersList from "./UsersList/UsersList";
import css from './Users.module.scss'

const Users = ({loading = false, users = [], getUsers}) => {

    const {Btn} = Actions()

    useEffect(() => {
        getUsers(1)
    }, [getUsers])

    const handleMoreClick = e => {
        console.log('handleMoreClick')
    }

    console.log(!!users.length)

    return (
        <section className={css.section}>
            <div className={css.container}>

                <h1 className={css.title}>
                    Our cheerful users
                </h1>

                <p className={css.attention}>
                    Attention! Sorting users by registration date
                </p>

                <div className={css.list}>
                    {!!users.length && (
                        <UsersList loading={loading} users={users}/>
                    )}
                </div>

                <Btn onClick={handleMoreClick}>
                    Show More
                </Btn>

            </div>
        </section>
    )
}

const mSTP = state => ({
    users: users(state),
    loading: loading(state)
})

const mDTP = {
    getUsers: handleUsers
}

export default connect(mSTP, mDTP)(Users)