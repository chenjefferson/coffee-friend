import React, { Component } from 'react';

export class Chat extends Component {
  render() {
    return (
      <section>
        <h1>Chat With {this.props.name}</h1>
        <div className='chat'></div>
        <input type='text' placeholder='Say hi :)' />
      </section>
    );
  }
}

export default Chat;
