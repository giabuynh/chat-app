import axios from "axios";
import { useState } from "react";

const projectID = "f0ad4879-7f21-4f3b-a6f0-7bd43aef0356";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password
    };

    try {
      await axios.get("https://api.chatengine.io/chats", { headers: authObject });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    }
    catch (err) {
      setError("Incorrect credential.");
    };
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handelPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chap Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" className="input" value={username} placeholder="Username" onChange={handleUsernameChange} />
          <input type="password" className="input" value={password} placeholder="Password" onChange={handelPasswordChange} />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h2 className="error">{error}</h2>
      </div>
    </div>
  );
}

export default LoginForm;