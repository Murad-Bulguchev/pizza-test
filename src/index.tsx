import React from 'react'; // 1 import вытаскивает код из библиотеки react и дает ей переменную
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './scss/app.scss';
import App from './App';

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <BrowserRouter>
    {/*  @ts-ignore  */}
    <App />
    </BrowserRouter>
  </>
);

// 2 App.jsx