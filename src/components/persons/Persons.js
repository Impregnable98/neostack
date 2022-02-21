import React, {useEffect} from "react";
import axios from "axios";
import "./style.scss";
import Modal from "../modal/Modal";

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
                            <tr className="persons__elem" key={person.id}>
                                    <td>{person.firstName}</td>
                                    <td>{person.lastName}</td>
                                    <td>
                                        <button className="btn update"/>
                                        <button className="btn delete"/>
                                    </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <button className="createPerson" onClick={this.showModal}>Добавить сотрудника</button>
                <Modal activeModal={this.state.show} onClose={this.hideModal}/>
            </div>
        );
    }
}
