import { useState } from "react";
import Chat from "./components/Chat";
import Login from "./components/Login";

function App() {

  const [username, setUsername] = useState(null);

  const goToLogin = () => {
    setUsername(null);
  };

  return (

    <div>

      {!username && (
        <Login setUsername={setUsername} />
      )}

      {username && (
        <Chat
          username={username}
          goToLogin={goToLogin}
        />
      )}

    </div>

  );

}

export default App;