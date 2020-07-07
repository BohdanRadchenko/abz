import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {AsyncHome} from "./async.routes";

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <AsyncHome/>
            </Route>

            <Redirect to="/"/>
        </Switch>
    )
}