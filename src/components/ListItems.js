import React from 'react'
import ListItem from './ListItem'
import axios from 'axios'
import StudentRow from './StudentRow'

class ListItems extends React.Component {

    constructor () {
        super()

        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onRemovePressed = this.onRemovePressed.bind(this)

        this.state = {
            items: [],
            students: []
        }
    }

    componentDidMount () {

        axios.get('https://stu01.herokuapp.com/api/student')
        .then((response) => {
            console.log(response.data)

            const students = response.data.list
            this.setState(() => {
                return {
                    students
                }
            })
        })
        .catch((error) => {

        })
    }

    onRemovePressed (_id) {

        axios.delete(`https://stu01.herokuapp.com/api/student/${_id}`)
        .then((response) => {

            this.setState((prevState) => {

                const students = prevState.students.filter((std) => {
                    return std._id != _id
                })

                return {
                    students
                }
            })
        })
        .catch((error) => {

        })
    }

    onFormSubmit (e) {

        e.preventDefault()

        const firstName = e.target.elements.firstName.value
        const lastName = e.target.elements.lastName.value
        const classroom = e.target.elements.classroom.value

        axios.post('https://stu01.herokuapp.com/api/student',
            {
                firstName,
                lastName,
                classroom
            }
        )
        .then((response) => {
            console.log(response.data)

            const newStudent = response.data.data[0]
            this.setState((prevState) => {
                return {
                    students: [...prevState.students, newStudent]
                }
            })

        })
        .catch((error) => {

        })
    }

    render () {

        const {students} = this.state

        return (
            <div>
            {
                students.length > 0 &&
                    <div>
                    <h2>Seçenekler</h2>
                    <table>
                        <tbody>
                    {
                        students.map((student,index) => {
                            return (
                                <StudentRow 
                                    key={index}
                                    student={student}
                                    onRemovePressed={this.onRemovePressed}
                                />
                            )
                        })
                    }
                    </tbody>
                    </table>
                </div>
            }
                <div>
                    <form onSubmit={this.onFormSubmit}>
                        <input type="text" name="firstName" placeholder="Ad Girin" /><br />
                        <input type="text" name="lastName" placeholder="Soyad Girin" /><br />
                        <select name="classroom">
                            <option value="civcivler">civcivler</option>
                            <option value="arılar">arılar</option>
                            <option value="kelebekler">kelebekler</option>
                        </select>
                        <button>Kaydet</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ListItems