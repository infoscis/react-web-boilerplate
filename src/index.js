import React from 'react'
import ReactDOM from 'react-dom'
import Container from './components/Container.react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './app.scss'
const container = document.getElementById('container');
ReactDOM.render(<Container/>, container);
/*
var React = require('react');
var ReactDOM = require('react-dom');
var Container = require ('./components/Container.react');
const container = document.getElementById('container');
ReactDOM.render(<Container/>, container);
*/