import React from "react";
import {Button} from "react-bootstrap";
import './post-list-item.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BtnImportant = ({onToggleImportant}) => {
    return (
        <Button type="button" className="btn btn-star btn-sm" onClick={onToggleImportant} title="Избранное">
            <FontAwesomeIcon icon="star" />
        </Button>
    )
};

export default BtnImportant

