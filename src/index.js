import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import {Router} from 'react-router';
import { browserHistory } from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-widgets/dist/css/react-widgets.css';



const store = createStore(reducers);

ReactDOM.render(
<Provider store={store} >
<Router history={browserHistory} routes={routes}  />
</Provider>
, document.getElementById('root'));
registerServiceWorker();