import React from 'react';
import {connect} from 'react-redux';
import Article from './Article';
import { normalizedArticles } from '../src/fixtures';
import {inArray, inRange, inSelected} from '../Filters';

import 'react-select/dist/react-select.css';

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
            return normalizedArticles.filter( article =>
            !inArray(article, state.deletedArticles) &&
            inRange(article.date, state.range) &&
            inSelected() ); // заглушка - селектор еще не реализовал
        })(state)
    }
})(ArticleList);