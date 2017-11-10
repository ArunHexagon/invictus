
import React from 'react';
import { render } from 'react-dom';
import h from 'react-hyperscript';
import Home from './app/home.js';

// class App extends React.Component{
//     render() {
//         return (
//             h( [Home])
//         )
//     }
// }

render(< Home />, window.document.getElementById('app'));
