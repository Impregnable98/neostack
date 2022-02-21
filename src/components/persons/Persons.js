import React, {useEffect} from "react";
import axios from "axios";
import "./style.scss";
import Modal from "../modal/Modal";
import Person from "../person/Person";

export default class Persons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            persons: [],
            show: false,
        }

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    showModal() {
        this.setState({ show: true });
    }

    hideModal() {
        this.setState({ show: false });
    }
    componentDidMount() {
        axios.get(`/api/v1/persons/`)
            .then(res => {
                const data = res.data;
                this.setState({ persons: data });
            })
    }

    render() {
        return (
            <div className="persons">
                <table>
                    <thead>
                        <tr>
                            <th>Имя</th>
                            <th>Фамилия</th>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.persons.map(person =>
                            <Person key={person.id} id={person.id} firstName={person.firstName} lastName={person.lastName}/>
                        )}
                    </tbody>
                </table>
                <button className="createPerson" onClick={this.showModal}>Добавить сотрудника</button>
                <Modal activeModal={this.state.show} onClose={this.hideModal}/>
            </div>
        );
    }
}
