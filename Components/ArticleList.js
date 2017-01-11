import React from 'react';
import { connect } from 'react-redux';
import Article from './Article';

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
        articles: state.articles
    }
})(ArticleList);