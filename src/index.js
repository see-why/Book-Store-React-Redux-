import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/configureStore';
import App from './App';
import './App.css';
import './styles/circle.css';
import './styles/app-mobile.css';
import './styles/progress-bar.css';
import './styles/chapter-progress.css';
import './styles/form.css';
import '../ScreenShot.PNG';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
