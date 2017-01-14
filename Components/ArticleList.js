import React from 'react';
import {connect} from 'react-redux';
import Article from './Article';
import {articles} from '../src/fixtures';
import {inArray, inRange, inSelected} from '../Filters';

class ArticleList extends React.Component {

    render() {

        let articles = this.props.articles.map(article => {
            return <Article key={ article.id } article={article}/>
        });

        return (
            <section className="article_list">
                { articles }
            </section>
        );
    }
}

export default connect(state => {
    return {
        articles: (function (state) {
            return articles.filter( article =>
            !inArray(article, state.deletedArticles) &&
            inRange(article.date, state.range) &&
            inSelected() );
        })(state)
    }
})(ArticleList);