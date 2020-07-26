import React, {Component} from 'react';
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'
import styled from 'styled-components'
import './app.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {faCheckSquare, faStar, faTrash, faHeart, faPencilAlt, faCheck, faBan} from "@fortawesome/free-solid-svg-icons";


library.add(fab, faCheckSquare, faStar, faTrash, faHeart, faPencilAlt, faCheck, faBan);


const AppBlock = styled.main`
    background-color: transparent;
`;


class AppIndex extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        data: [
            {id: 1, label: "Начинаю учить React", important: true, like: false},
            {id: 2, label: "Купить молоко", important: false, like: false},
            {id: 3, label: "Купить хлеб", important: false, like: false},
        ],
        search: '',
        filter: 'all',
    };
    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id); // получаем конкретный id элемента по клику

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    };
    getUniqId = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };
    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.getUniqId()
        };
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    };
    onToggle = (id, flag) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const before = data[index];

            let newItem;

            if (flag) {
                newItem = {...before, like: !before.like};
            } else {
                newItem = {...before, important: !before.important};
            }
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    };
    onEditItem = (id, value) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const before = data[index];

            let newItem = {...before, label: value};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    };
    searchPost = (items, search) => {
        if (search.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.label.toLowerCase().indexOf(search) > -1
        });

    };
    onUpdateSearch = (search) => { // обновление строки поиска
        this.setState({search})
    };

    filterPosts = (data, filter) => {
        if (filter === 'like'){
            return data.filter(item => item.like); // проверяем наличие поля like в true
        } else {
            return data
        }
    };
    onFilterSelect = (filter) => {
        this.setState({filter})
    };
    render() {
        const {data, search, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPosts(this.searchPost(data, search), filter); //

        return <Container className="customContainer">
            <AppHeader liked={liked}
                       allPosts={allPosts}
            />
            <AppBlock className="main">
                <div className="search-panel d-flex">
                    <SearchPanel updateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList posts={visiblePosts}
                          onDelete={this.deleteItem}
                          onToggle={this.onToggle}
                          onEdit={this.onEditItem}
                />
                <PostAddForm onAdd={this.addItem}/>
            </AppBlock>
        </Container>
    }
}

export default AppIndex;