import React, {Component} from "react";
import './post-status-filter.scss'
import {Button} from "react-bootstrap";

class PostStatusFilter extends Component {
    state = {
        buttons: [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'},
        ],
    };
    render() {
        const buttons = this.state.buttons.map(({label, name}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            return (
                <Button key={name} type="button" className={active ? 'btn-info' : 'btn-light'} onClick={() => onFilterSelect(name)}>{label}</Button>
            )
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}


export default PostStatusFilter;