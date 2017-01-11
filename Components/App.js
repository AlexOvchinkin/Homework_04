import React from 'react';
import ArticleList from './ArticleList';
import SelectionBar from './SelectionBar';
import { Provider } from 'react-redux';
import store from '../Store/Store';

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <section className="main">
                    <SelectionBar />
                    <ArticleList />
                </section>
            </Provider>
        );
    }
}
