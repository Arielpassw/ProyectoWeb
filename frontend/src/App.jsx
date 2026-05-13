import { useState } from "react";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {

  const [user, setUser] = useState(null);

  return (

    <div>

      {user ? (
        <Dashboard />
      ) : (
        <Login setUser={setUser} />
      )}

    </div>

  );

}

export default App;