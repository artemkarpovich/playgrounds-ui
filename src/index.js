import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { muiTheme } from './styles';
import store from './store';
import App from './App';
import Map from './components/Map';
import Login from './components/Login';

injectTapEventPlugin();

ReactDOM.render((
  <MuiThemeProvider
    muiTheme={muiTheme}
  >
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route>
          <Route path="/" component={App}>
            <IndexRoute component={Map} />
          </Route>
          <Route path="login" component={Login} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
), document.getElementById('root'));
