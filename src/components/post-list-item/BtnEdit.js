import React from "react";
import {Button} from "react-bootstrap";
import './post-list-item.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BtnEdit = ({onEditPost}) => {
    return (
        <Button className="btn btn-edit" variant="warning" onClick={onEditPost} title="Редактировать">
            <FontAwesomeIcon icon="pencil-alt" />
        </Button>
    )
};

export default BtnEdit