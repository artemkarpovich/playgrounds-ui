import React from 'react';
import createSocketConnection from './../../utils/createSocketConnection';
import SendButton from 'material-ui/svg-icons/content/send';

export default class MessageBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      users: [],
      text: ''
    };

    this.socket = createSocketConnection();
    this.sendMessage = this.sendMessage.bind(this);
    this.changeTextHandler = this.changeTextHandler.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
  }

  componentDidMount() {
    this.socket.on('chat message', this.sendMessage);
  }

  sendMessage(message) {
    const { messages } = this.state;
    const newMessages = [...messages, message];
    this.setState({ messages: newMessages });
  }

  handleMessageSubmit() {
    const message = this.state.text;
    /*const { messages } = this.state;
    const newMessages = [...messages, message];
    this.setState({ messages: newMessages });*/
    this.socket.emit('chat message', message);
    this.setState({ text: '' });
  }

  changeTextHandler(e) {
    this.setState({ text: e.target.value });
  }
  render() {
    const { account } = this.props;
    return (
      <div className="message-box">
        <ul className="chat-body">
          {
            this.state.messages.length > 0 ?
              this.state.messages.map((message, index) => <li key={index}>
                {account.info.email}: {message}
              </li>) :
              null
          }
        </ul>
        <div className="chat-input">
          <input type="text" onChange={this.changeTextHandler} value={this.state.text} />
          <SendButton onClick={this.handleMessageSubmit}>Отправить</SendButton>
        </div>
      </div>
    )
  }
}
