import React, { useState } from 'react';
import './ChatComponent.css'; // Import tệp CSS của bạn

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [senderName, setSenderName] = useState('You'); // Tên người gửi

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, user: senderName }]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-component">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user === senderName ? 'your-message' : 'other-message'}`}>
            {message.user !== senderName && <div className="sender-name">{message.user}:</div>}
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input" style={{ marginTop : 500, position : 'relative'  }}>
        <input
        style={{ height : 30, borderRadius : 15, width : 250,  }}
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
