import React, { Fragment, useState } from "react";

import Modal from "../modal/Modal.component";
import Backdrop from "../backdrop/Backdrop.component";

export default function Todo({ text }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const deleteHandler = () => {
        setModalIsOpen(true);
    };

    const closeModalHandler = () => {
        setModalIsOpen(false);
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
                    <Modal
                        onCancel={closeModalHandler}
                        onConfirm={closeModalHandler}
                    />
                    <Backdrop onCancel={closeModalHandler} />
                </Fragment>
            )}
        </div>
    );
}
