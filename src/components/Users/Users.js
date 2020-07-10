import React, {useEffect, useState} from "react";
import {connect} from 'react-redux'
import {loading, users} from '../../redux/users/usersSelectors'
import {totalPage} from '../../redux/controller/controllerSelectors'
import {handleUsers} from '../../redux/users/usersOperations'
import {Element} from 'react-scroll'
import Actions from "../buttons/Actions/Actions";
import UsersList from "./UsersList/UsersList";
import css from './Users.module.scss'

const Users = ({loading = false, users = [], getUsers, totalPage}) => {
    const {Btn} = Actions()
    const [pageCount, setPageCount] = useState(1)

    useEffect(() => {
        getUsers(pageCount)
    }, [getUsers, pageCount])

    const handleMoreClick = e => {
        if (pageCount < totalPage) {
            setPageCount(pageCount + 1)
        }
    }

    return (
        <Element name="users">
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

					{pageCount < totalPage && (
						<Btn event={handleMoreClick}
							disabled={pageCount === totalPage}>
							Show More
						</Btn>
					)}

                </div>
            </section>
        </Element>

    )
}

const mSTP = state => ({
    users: users(state),
    loading: loading(state),
    totalPage: totalPage(state)
})

const mDTP = {
    getUsers: handleUsers,
}

export default connect(mSTP, mDTP)(Users)