import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/styled-engine'
import { CssBaseline } from '@mui/material';
import reportWebVitals from './reportWebVitals';
import 'perfect-scrollbar/css/perfect-scrollbar.css'


ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </StyledEngineProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
