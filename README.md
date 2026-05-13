
# Sistema Web de Control de Gastos Personales con IA

## Descripción

Sistema web desarrollado para la gestión de ingresos y gastos personales, permitiendo a los usuarios registrar movimientos financieros y visualizar reportes de manera sencilla e intuitiva.

El sistema incorpora autenticación de usuarios mediante Firebase y funcionalidades inteligentes para el análisis básico de gastos.

---

# Tecnologías Utilizadas

## Frontend
- React
- Vite
- CSS

## Backend
- Node.js
- Express

## Base de Datos y Autenticación
- Firebase Authentication
- MongoDB

---

# Estructura del Proyecto

```txt
control-gastos-ia-completo/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── firebase/
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

# Instalación del Proyecto

## 1. Clonar repositorio

```bash
git clone https://github.com/Arielpassw/ProyectoWeb.git 
```

---

# Configuración Backend

Entrar a la carpeta backend:

```bash
cd backend
```

Instalar dependencias:

```bash
npm install
```

Iniciar servidor:

```bash
npm start
```

---

# Configuración Frontend

Entrar a la carpeta frontend:

```bash
cd frontend
```

Instalar dependencias:

```bash
npm install
```

Ejecutar proyecto:

```bash
npm run dev
```

---


# Funcionalidades

- Registro de usuarios
- Inicio de sesión
- Autenticación con Firebase
- Registro de ingresos
- Registro de gastos
- Dashboard financiero
- Visualización de balances
- Reportes básicos
- Análisis inteligente de gastos

---

# Mockups del Sistema

## Login

```txt
-------------------------
|       LOGIN           |
|-----------------------|
| Correo:              |
| [______________]     |
|                      |
| Contraseña:         |
| [______________]     |
|                      |
| [ Ingresar ]         |
-------------------------
```

---

## Dashboard

```txt
-------------------------
|  PANEL PRINCIPAL      |
|-----------------------|
| Ingresos: $1000       |
| Gastos:   $600        |
| Balance:  $400        |
|-----------------------|
| Gráfico aquí          |
-------------------------
```

---

## Registro de Gastos

```txt
-------------------------
| Nuevo gasto           |
|-----------------------|
| Monto:               |
| [_________]          |
| Categoría:           |
| [Comida ▼]           |
|                      |
| [Guardar]            |
-------------------------
```

---

# Firebase Authentication

El sistema utiliza Firebase Authentication para:

- Registro de usuarios
- Inicio de sesión
- Validación de credenciales
- Seguridad de autenticación

---

# Git Ignore Recomendado

```gitignore
node_modules/
.env
dist/
.vite/
```

---

# Integrantes

- Ariel Arias
- Emilia Tana

---

---

# Evidencia

- Módulo Registro
  
  <div align="center"> <img width="580" src="https://github.com/user-attachments/assets/27b72792-cccc-409a-b976-815e22cb9fc9" />

  <div align="center"> <img width="500" src="https://github.com/user-attachments/assets/52df9a40-cdba-4a3c-b130-1ebfeb2dc531" />
   
- Módulo Login

  <div align="center"> <img width="580" src="https://github.com/user-attachments/assets/535766b7-fae8-4e46-8b97-e6141c4cf1cb" /> </div>
  
- Autentificación

<div align="center"> <img width="900" src="https://github.com/user-attachments/assets/a7bbce26-5102-4a92-a311-f5782c5fb269" /> </div>

---

# Materia

Desarrollo de Aplicaciones Web

---

# Estado del Proyecto

En desarrollo

---
