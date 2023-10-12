import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/Store.ts';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);