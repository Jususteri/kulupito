import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import Startup from './components/startup';
 

const firebaseConfig = {
  apiKey: "AIzaSyD3A7L6k1qCSra_4kU9g0g32buCsjueTz0",
  authDomain: "kulukirjanpito-19376.firebaseapp.com",
  projectId: "kulukirjanpito-19376",
  storageBucket: "kulukirjanpito-19376.appspot.com",
  messagingSenderId: "601049690002",
  appId: "1:601049690002:web:7ccc09ca57a2407e6d5b4b",
  measurementId: "G-MTHDQHVQCE"
};

 // const root = ReactDOM.createRoot(document.getElementById('root'));
 ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <AuthCheck fallback={<Startup />}>
    <App />
    </AuthCheck>
  </FirebaseAppProvider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



