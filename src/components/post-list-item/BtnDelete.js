import React from "react";
import {Button} from "react-bootstrap";
import './post-list-item.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BtnDelete = ({openModalDelete}) => {
    return (
        <Button type="button" className="btn btn-trash btn-sm" onClick={openModalDelete} title="Удалить">
            <FontAwesomeIcon icon="trash" />
        </Button>
    )
};

export default BtnDelete