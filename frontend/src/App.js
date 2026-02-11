import React, { Component } from 'react';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import './App.scss';
import { connect, sendMessage } from './api';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            ChatHistory: []
        }
    }

    componentDidMount() {
        connect();
    }
}

