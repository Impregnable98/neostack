import React, {useState}  from "react";
import "./style.scss";
import axios from "axios";

const Modal = props => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    if (!props.activeModal) {
        return null;
    }
    function createPerson(){
        axios.post(`/api/v1/persons/`,{firstName: firstName, lastName: lastName})
            .then(res => {
                props.onClose();
                window.location.reload();
                console.log(res.data);
            })
    }
    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__title">Добавление нового сотрудника</div>
                <div className="modal__close" onClick={props.onClose}/>
                <input type="text" name="firstName" placeholder="Введите имя сотрудника" onChange={(event) => setFirstName(event.target.value)}/>
                <input type="text" name="lastName" placeholder="Введите фамилию сотрудника" onChange={(event) => setLastName(event.target.value)}/>
                <button onClick={createPerson}>Сохранить</button>
            </div>
        </div>
    )
}

export default Modal;
