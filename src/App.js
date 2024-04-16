import React, { useState } from 'react';
import './index.css'; // Import CSS file

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function App() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    
    if (inputText.trim() !== '') {
      const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = {
        user: randomUser,
        text: inputText,
        likes: 0
        
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const handleLike = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].likes += 1;
    setMessages(updatedMessages);
  };

  return (
    <div className="chat-container">
      <div className="message-container">
        {messages.map((message, index) => (
          <div className="message" key={index}>
            <span className="user">{message.user}:</span>
            <span className="text">{message.text}</span>
            <button className="like-button" onClick={() => handleLike(index)}>Like ({message.likes})</button>
          </div>
        ))}
      </div>
      <div className='inputfield'>
            <input
              type="text"
              className="input-text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type a message..."
             
            />
             <button className="send-button" onClick={sendMessage}  > Send</button>
            
      </div>
      
    </div>
  );
}

export default App;
