import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Lojas from './container/Lojas';
import Produtos from './container/Produtos';
import Estoques from './container/Estoques';
import Home from './container/Home';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App} >
            <IndexRoute component={Home} />
            <Route path='/lojas' component={Lojas} />
            <Route path='/produtos' component={Produtos} />
            <Route path='/estoques' component={Estoques} />
        </Route>

    </Router>
    ,
    document.getElementById('root'));
registerServiceWorker();
