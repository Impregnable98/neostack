import React from "react";
import "./style.scss";

const Modal = ({firstName, lastName}) => {
    return (
        <div className="modal">
            <div className="modal__content">
                <button>Сохранить</button>
            </div>
        </div>
    )
}

export default Modal;
