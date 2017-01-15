import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

export default class CommentsList extends React.Component {

    render() {

        let commentsArray = this.props.comments;

        if (commentsArray) {
            let comments = commentsArray.map(comment => {
               return <Comment key={ comment.id } comment={ comment }/>
            });

            return (
                <div className="article_comments">
                    { comments }
                    <CommentForm article={ this.props.article }/>
                </div>
            );
        }

        return null;
    }
}
