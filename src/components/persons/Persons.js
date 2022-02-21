import React, {useEffect} from "react";
import axios from "axios";
import "./style.scss";

export default class Persons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            persons: []
        }

        this.updatePerson = this.updatePerson.bind(this);
        this.deletePerson = this.deletePerson.bind(this);
    }

    componentDidMount() {
        axios.get(`/api/v1/persons/`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    updatePerson() {
        console.log('Редактировать');
    }

    deletePerson() {
        console.log('Удалить');
    }

    render() {
        return (
            <div className="persons">
                <table>
                    <thead>
                        <tr>
                            <th>Имя</th>
                            <th>Фамилия</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.persons.map(person =>
                            <tr className="persons__elem" key={person.id}>
                                    <td>{person.firstName}</td>
                                    <td>{person.lastName}</td>
                                    <td>
                                        <button className="btn update" onClick={this.updatePerson}></button>
                                        <button className="btn delete" onClick={this.deletePerson}></button>
                                    </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <button className="createPerson">Добавить сотрудника</button>
            </div>
        );
    }
}
