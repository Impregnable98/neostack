import React, {useEffect, useState} from "react";
import ModalDelete from "../modalDelete/ModalDelete";
import ModalEdit from "../modalEdit/ModalEdit";

const Person = props => {
    const [activeModal, setActiveModal] = useState(false);
    const [activeModalEdit, setActiveModalEdit] = useState(false);

    function hideModal() {
        setActiveModal(false);
    }

    function hideModalEdit() {
        setActiveModalEdit(false);
    }

    function showModal() {
        setActiveModal(true);
    }

    function showModalEdit() {
        setActiveModalEdit(true);
    }

    return (
        <tr className="persons__elem">
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>
                <button className="btn update" onClick={showModalEdit}/>
                <button className="btn delete" onClick={showModal}/>
            </td>
            <ModalDelete id={props.id} activeModal={activeModal} onClose={hideModal}/>
            <ModalEdit id={props.id} firstName={props.firstName} lastName={props.lastName} activeModal={activeModalEdit} onClose={hideModalEdit} />
        </tr>
    )
}

export default Person;
