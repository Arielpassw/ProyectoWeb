import { useState } from "react";

import app from "../firebase/firebaseConfig";

import {
  getAuth,
  createUserWithEmailAndPassword
} from "firebase/auth";

const auth = getAuth(app);

function Register({ setShowRegister }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Usuario registrado correctamente");

      setShowRegister(false);

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <div className="container">

      <div className="card">

        <h2>Registro</h2>

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>
          Registrarse
        </button>

      </div>

    </div>

  );

}

export default Register;