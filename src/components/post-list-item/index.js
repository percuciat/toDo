import React, {Component} from "react";
import './post-list-item.scss'
import ModalDelete from "./ModalDelete"
import BtnEdit from "./BtnEdit"
import BtnImportant from "./BtnImportant"
import BtnDelete from "./BtnDelete"
import {ListGroup} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const date = new Date().toLocaleString();

class PostListItem extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        formEdit: false,
        text: '',
        show: false,
    };
    onEditPost = () => {
        this.setState(({formEdit: true}));
    };
    closeEditPost = () => {
        this.setState(({formEdit: false,
            text : this.props.label}));
    };
    actionEditPost = (e) => {
        this.setState({text : e.target.value});
    };
    saveEditPost = () => {
        if(this.state.text === ''){
            this.props.onEditItem(this.props.id, this.props.label);
        } else {
            this.props.onEditItem(this.props.id, this.state.text);
        }
        this.setState({formEdit: false});
    };
    openModalDelete = () => {
        this.setState({show: true});
    };
    cancelModalDelete = () => {
        this.setState({show: false});
    };
    render() {
        const { label, onDelete, onToggleImportant, onToggleLiked, important, like } = this.props;
        const {  formEdit } = this.state;
        return <>
                <ListGroup.Item as="li" className={important ? "app-list-item important" : "app-list-item"}>
                    <div className="info">
                        <p className="date">Дата <strong>{date}</strong></p>
                        <p className="app-list-item-label" onClick={onToggleLiked}>
                            {label}
                        </p>
                        <form className={formEdit ? "form-edit active" : "form-edit"} action="#">
                            <label>
                                <textarea className="form-edit-field" placeholder={label} onInput={this.actionEditPost}></textarea>
                            </label>
                            <div className="form-edit-wrapper">
                                <button type="button" className="form-edit-btn btn-success" onClick={this.saveEditPost} title="Сохранить изменения">
                                    <FontAwesomeIcon icon="check" />
                                </button>
                                <button type="button" className="form-edit-btn btn-danger" onClick={this.closeEditPost} title="Отмена">
                                    <FontAwesomeIcon icon="ban" />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="action">
                        <BtnEdit onEditPost={this.onEditPost}/>
                        <BtnImportant onToggleImportant={onToggleImportant}/>
                        <BtnDelete openModalDelete={this.openModalDelete}/>
                        <FontAwesomeIcon className={like ? "app-list-item-icon like" : "app-list-item-icon"} icon="heart" />
                    </div>
                    <ModalDelete onDelete={onDelete}
                                 show={this.state.show}
                                 cancelModalDelete={this.cancelModalDelete} />
                </ListGroup.Item>
            </>

    }
}



export default PostListItem;