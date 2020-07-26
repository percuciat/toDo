import React, {Component} from "react";
import PropTypes from "prop-types"
import {Button, } from "react-bootstrap";
import './post-add-form.scss'


class PostAddForm extends Component{
    constructor(props) {
        super(props);
    }
    state = {
        text: '',
    };
    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        })
    };
    render() {
        return (
            <form action="#" className="bottom-panel d-flex" onSubmit={this.onSubmit}>
                <input type="text" placeholder="Следующая цель для достижения" className="form-control new-form-label"
                    onChange={this.onValueChange}
                       value={this.state.text}
                />
                <Button type="submit" className="btn">Добавить</Button>
            </form>
        )
    }
}


PostAddForm.propTypes = {
    onAdd: PropTypes.func,
};

export default PostAddForm;