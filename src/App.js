import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    <ChatEngine 
      height = "100vh"
      projectID = "f0ad4879-7f21-4f3b-a6f0-7bd43aef0356"
      userName = "admin"
      userSecret = "giabuynh"
      renderChatFeed = {(chatAppProps) => <ChatFeed { ... chatAppProps} />}
    />
  );
}

export default App;