import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />

  return (
    <ChatEngine 
      height = "100vh"
      projectID = "f0ad4879-7f21-4f3b-a6f0-7bd43aef0356"
      userName = {localStorage.getItem("username")}
      userSecret = {localStorage.getItem("password")}
      renderChatFeed = {(chatAppProps) => <ChatFeed { ... chatAppProps} />}
    />
  );
}

export default App;