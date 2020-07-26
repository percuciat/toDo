import React from "react";
import './post-list-item.scss'
import {Button, Modal} from "react-bootstrap";


const ModalDelete = ({ onDelete, show, cancelModalDelete }) => {
    return (
        <Modal aria-labelledby="contained-modal-title-vcenter"
               centered
               show={show} variant="success">
            <Modal.Header>
                <Modal.Title>Вы действительно хотите удалить запись?</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={onDelete} variant="outline-danger">
                    Да
                </Button>
                <Button onClick={cancelModalDelete} variant="outline-success">
                    нет
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default ModalDelete;