import React from 'react'
import ListItems from './ListItems'
import {Button,Checkbox} from "@material-ui/core"

class Dashboard extends React.Component {

    storeItem () {

        const person = {
            name: "Kazım",
            city: "İstanbul"
        }

        const str = JSON.stringify(person)

        localStorage.setItem('key',str)
        sessionStorage.setItem('key','value')
    }

    render () {

        return (
            <React.Fragment>
                <h1>Dashboard</h1>
                <Button variant="contained" color="primary" onClick={() => {
                    console.log('material clicked')
                }}>Default</Button>
                <Checkbox
                    value="checkedA"
                />
                <ListItems />
            </React.Fragment>
        )
    }
}

export default Dashboard