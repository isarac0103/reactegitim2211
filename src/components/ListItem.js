import React from 'react'

class ListItem extends React.Component {

    render () {

        const {index,item,onRemovePressed} = this.props

        return (
            <li>
                {item}
                <button 
                    onClick={() => {onRemovePressed(index)}}
                >Sil</button>
            </li>
        )
    }
}

export default ListItem