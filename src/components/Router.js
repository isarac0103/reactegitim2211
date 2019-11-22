import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Login'
import Profile from './Profile'
import Dashboard from './Dashboard'
import Header from './Header'
import React from 'react'

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route component={Dashboard} path="/" exact={true} />
                    <Route component={Login} path="/login" />
                    <Route component={Profile} path="/profile" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}