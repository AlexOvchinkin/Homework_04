import React from 'react';
import CommentsList from './CommentsList';
import {deleteArticle} from '../AC';
import {connect} from 'react-redux';

class Article extends React.Component {

    render() {

        let article = this.props.article;


        let comments = article.comments ?
            article.comments.map(item => {
                return this.props.allComments.get(item)
            }) :
            null;


        return (
            <article className="article">
                <div className="article_body">
                    <div className="article_delete" onClick={this.handleOnClick}>delete article [X]</div>
                    <h3>{ article.title }</h3>
                    <p className="article_date">{ article.date }</p>
                    <p className="article_text">{ article.text }</p>
                </div>
                <CommentsList comments={ comments } article={ article }/>
            </article>
        )
    };

    handleOnClick = ev => {
        this.props.deleteArticle(this.props.article.id);
    };

}

export default connect(state => {
    return {
        allComments: state.comments
    }
}, {deleteArticle})(Article);