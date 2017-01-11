import React from 'react';

export default class Comment extends React.Component {

    render() {

        let comment = this.props.comment;

        return (
            <article className="comment">
                <p className="comment_text">{ comment.text }</p>
                <p className="comment_user">{ comment.user }</p>
            </article>
        );
    }
}
