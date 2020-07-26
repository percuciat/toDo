import React from "react";
import PropTypes from "prop-types"
import PostListItem from "../post-list-item";
import {ListGroup, } from "react-bootstrap";
import './post-list.scss'

const PostList = ({posts, onDelete, onToggle, onEdit}) => {
    return (
        <ListGroup as="ul" className="app-list">
            {
                posts.map(item => {
                   return <PostListItem
                       label={item.label}
                       important={item.important}
                       like={item.like}
                       key={item.id}
                       onDelete={() => onDelete(item.id)}
                       onToggleImportant={() => onToggle(item.id)}
                       onToggleLiked={() => onToggle(item.id, 'like')}
                       onEditItem={onEdit}
                       id={item.id}
                   />
                })
            }
        </ListGroup>
    )
};

PostList.propTypes = {
    label: PropTypes.string.isRequired,
    important: PropTypes.bool,
    onToggleLiked: PropTypes.func,
    onToggleImportant: PropTypes.func,
};

PostList.defaultProps = {
    label: 'Нет записей',
};

export default PostList;