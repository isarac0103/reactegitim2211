import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom'

export default () => {
    return (
        <Fragment>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/profile">Profile</NavLink>
        </Fragment>
    )
}