import { useState } from "react";
import "../styles/chat.css";

function Login({ setUsername }) {

  const [newUser, setNewUser] = useState("");
  const [existingUser, setExistingUser] = useState("");



  const createUser = async () => {

    if (!newUser.trim()) {
      alert("Please enter a username");
      return;
    }

    try {

      const res = await fetch("http://localhost:8020/api/users");
      const users = await res.json();

      const exists = users.some(
        (u) => u.username.toLowerCase() === newUser.toLowerCase()
      );

      if (exists) {

        alert(
          "This username already exists. Please go to Existing User section."
        );

        return;

      }

      setUsername(newUser);

    } catch (err) {

      console.error("Error checking user:", err);

    }

  };



  const loginUser = async () => {

    if (!existingUser.trim()) {
      alert("Please enter a username");
      return;
    }

    try {

      const res = await fetch("http://localhost:8020/api/users");
      const users = await res.json();

      const exists = users.some(
        (u) => u.username.toLowerCase() === existingUser.toLowerCase()
      );

      if (!exists) {

        alert(
          "This user does not exist. Please go to New User section."
        );

        return;

      }

      setUsername(existingUser);

    } catch (err) {

      console.error("Error logging in:", err);

    }

  };



  return (

    <div className="login-container">

      <div className="login-outer-box">

        <h2>Chat Login</h2>

        <div className="login-sections">

          {/* NEW USER */}

          <div className="login-box">

            <h3>New User</h3>

            <input
              placeholder="Enter new username"
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
            />

            <button onClick={createUser}>
              Create User
            </button>

          </div>


          {/* EXISTING USER */}

          <div className="login-box">

            <h3>Existing User</h3>

            <input
              placeholder="Enter existing username"
              value={existingUser}
              onChange={(e) => setExistingUser(e.target.value)}
            />

            <button onClick={loginUser}>
              Login
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Login;