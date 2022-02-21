import React, {useEffect,useState}  from "react";
import axios from "axios";

const ModalEdit = props => {

    const [firstName, setFirstName] = useState({...props});
    const [lastName, setLastName] = useState({...props});

    React.useEffect(() => {
        setFirstName(props.firstName);
        setLastName(props.lastName);
    }, [props])

    if (!props.activeModal) {
        return null;
    }

    function editPerson(){
        axios.put(`/api/v1/persons/${props.id}`, {firstName: firstName, lastName: lastName})
            .then(res => {
                props.onClose();
                console.log(res.data);
            })
    }

    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__title">Редактирование сотрудника</div>
                <input type="text" name="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
                <input type="text" name="lastName"  value={lastName} onChange={(event) => setLastName(event.target.value)}/>
                <div className="modal__close" onClick={props.onClose}/>
                <button onClick={editPerson}>Cохранить</button>
            </div>
        </div>
    )
}

export default ModalEdit;
