import { useState } from "react";

import app from "../firebase/firebaseConfig";

import {
    getAuth,
    signInWithEmailAndPassword
} from "firebase/auth";

const auth = getAuth(app);

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        try {

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            alert("Login correcto");

        } catch (error) {

            alert("Credenciales incorrectas");

        }

    };

    return (

        <div className="container">

            <div className="card">

                <h2>Iniciar Sesión</h2>

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

                <button onClick={handleLogin}>
                    Ingresar
                </button>

            </div>

        </div>

    );

}

export default Login;