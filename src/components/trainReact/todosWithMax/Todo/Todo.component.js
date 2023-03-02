import React, { Fragment, useState } from "react";

import Modal from "../modal/Modal.component";
import Backdrop from "../backdrop/Backdrop.component";

export default function Todo({ text }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const deleteHandler = () => {
        setModalIsOpen(true);
    };

    return (
        <div className="card">
            <h2 className="title-train">{text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>
                    Delete
                </button>
            </div>
            {modalIsOpen && (
                <Fragment>
                    <Modal />
                    <Backdrop />
                </Fragment>
            )}
        </div>
    );
}
