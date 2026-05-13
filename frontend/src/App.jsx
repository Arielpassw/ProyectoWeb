import { useState } from "react";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {

  const [user, setUser] = useState(null);

  const [showRegister, setShowRegister] = useState(true);

  return (

    <div>

      {user ? (

        <Dashboard />

      ) : showRegister ? (

        <Register
          setShowRegister={setShowRegister}
        />

      ) : (

        <Login
          setUser={setUser}
        />

      )}

    </div>

  );

}

export default App;