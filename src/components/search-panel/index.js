import React, {Component} from "react";
import './search-panel.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchPanel extends Component {
    state = {
        search: ''
    };
    onUpdateSearch = (e) => {
        const search = e.target.value.toLowerCase();
        this.setState({search});
        this.props.updateSearch(search)
    };
    render() {
        return (
            <input className="form-control search-input" type="text" placeholder="Поиск по записям" onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchPanel;