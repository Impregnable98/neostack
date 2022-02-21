import React, {useState}  from "react";
import axios from "axios";

const ModalDelete = props => {
    if (!props.activeModal) {
        return null;
    }

    function deletePerson(){
        axios.delete(`/api/v1/persons/${props.id}`)
            .then(res => {
                console.log(res.data);
            })
    }

    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__title">Вы уверены, что хотите удалить сотрудника?</div>
                <div className="modal__close" onClick={props.onClose}/>
                <button onClick={deletePerson}>Удалить</button>
            </div>
        </div>
    )
}

export default ModalDelete;
