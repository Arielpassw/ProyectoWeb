export const login = (req, res) => {
    const { email, password } = req.body;

    if (email === "admin@test.com" && password === "1234") {
        return res.json({ success: true, message: "Login correcto" });
    }

    return res.status(401).json({ success: false, message: "Credenciales incorrectas" });
};