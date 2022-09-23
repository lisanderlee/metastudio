import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import ProjectReducers from './features/Projects'
import FileReducers from './features/Files'
import SelectedReducers from './features/Selected'

const store = configureStore({
  reducer: {
    projects: ProjectReducers,
    files: FileReducers,
    selected: SelectedReducers,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>
);
