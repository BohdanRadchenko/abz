import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {loading, users} from '../../redux/users/usersSelectors'
import {handleUsers} from '../../redux/users/usersOperations'
import css from './Users.module.scss'
import UsersList from "./UsersList/UsersList";

const Users = ({loading = false, users = null, getUsers}) => {

    useEffect(() => {
        getUsers({page : 1, count : 5})
    }, [getUsers])

    return (
        <section className={css.section}>
            <div className={css.container}>

                <h1 className={css.title}>
                    Our cheerful users
                </h1>

                <p className={css.attention}>
                    Attention! Sorting users by registration date
                </p>

                {users && (
                    <UsersList loading={loading} users={users}/>
                )}

            </div>
        </section>
    )
}

const mSTP = state => ({
    users : users(state),
    loading: loading(state)
})

const mDTP = {
    getUsers : handleUsers
}

export default connect(mSTP, mDTP)(Users)