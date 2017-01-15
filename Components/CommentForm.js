import React from 'react';
import {connect} from 'react-redux';
import { commentAdded } from '../AC';

class CommentForm extends React.Component {

    render() {
        return (
            <form className="comment_form" onSubmit={ this.handleSubmit }>
                <input type="text" placeholder="user" name="user"></input>
                <input type="text" placeholder="comment ..." name="text"></input>
                <button>Comment</button>
            </form>
        );
    };

    handleSubmit = ev => {
        ev.preventDefault();
        this.props.commentAdded({
            id: '',
            article: this.props.article,
            user: ev.target.querySelector('[name="user"]').value,
            text: ev.target.querySelector('[name="text"]').value
        });
    }
}

export default connect(null, { commentAdded })(CommentForm);


