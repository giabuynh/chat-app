import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForms = (props) => {  
  const [value, setValue] = useState('');
  const {chatId, creds} = props;
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const text = value.trim();
  }

  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping(props, chatId);
  }

  return(
    <form className="message-form" onSubmit={handleSubmit}> 
      <input 
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </form>
  );
}

export default MessageForms;