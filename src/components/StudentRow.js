import React from 'react'

export default (props) => {

    const renderDate = (str) => {
        return `${str}-S`
    } 

    const {_id,firstName,lastName,classroom,dateOfBirth} = props.student
    const {onRemovePressed} = props

    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{renderDate(classroom)}</td>
            <td>{dateOfBirth}</td>
            <td>
                <button onClick={() => {
                    onRemovePressed(_id)
                }}>Sil</button>
            </td>
        </tr>
    )
}