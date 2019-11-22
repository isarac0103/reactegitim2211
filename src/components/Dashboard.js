import React from 'react'
import ListItems from './ListItems'

class Dashboard extends React.Component {

    render () {

        return (
            <React.Fragment>
                <h1>Dashboard</h1>
                <ListItems />
            </React.Fragment>
        )
    }
}

export default Dashboard