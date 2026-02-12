import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
    render() {
        return (
            <div className="ChatInput">
                <input 
                    onKeyDown={this.props.send} 
                    placeholder="Type a message ... Hit Enter to send" 
                    id="chat-input"
                />
                <button onClick={() => {
                    const input = document.getElementById('chat-input');
                    if(input.value !== "") {
                        this.props.send({ keyCode: 13, target: input });
                    }
                }}>Send</button>
            </div>
        )
    }
}

export default ChatInput;