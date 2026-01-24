<h1 align="center"> DevTinder </h1>

DevTinder is a social networking web application inspired by modern connection-based platforms. The frontend is built with **React** and focuses on clean UI, smooth user experience, and efficient state management.

## 🚀 Features

- User authentication (Signup, Login, Logout)
- Protected routes for authenticated users
- User feed to explore profiles
- Send, accept, and reject connection requests
- Connections and requests pages
- Profile view and edit functionality
- Global state management using Redux Toolkit
- API communication using Axios
- Graceful handling of invalid routes with a 404 page

## 🛠 Tech Stack

- **React**
- **React Router (v6+)**
- **Redux Toolkit**
- **Axios**
- **Tailwind CSS**
- **Vite**
- **Shadcn UI**
- **Git**

---

## 📂 Project Structure

```
devtinder-frontend/
├── public/              # Static assets
├── src/
│   ├── assets/
│   ├── components/     # Reusable components
│   │   ├── feed/       # Feed-related components
│   │   ├── Navigation/ # Navbar and Footer
│   │   ├── profile/    # Profile components
│   │   └── ui/         # UI primitives (shadcn)
│   ├── feature/        # Redux slices
│   │   ├── connectionsSlice.js
│   │   ├── feedSlice.js
│   │   ├── requestsSlice.js
│   │   └── userSlice.js
│   ├── lib/
│   ├── pages/          # Page components
│   │   ├── Connections.jsx
│   │   ├── Feed.jsx
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   │   ├── Requests.jsx
│   │   └── Signup.jsx
│   ├── store/          # Redux store configuration
│   ├── utils/          # Constants and helpers
│   ├── App.jsx         # Root component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🔗 Backend Repository

The frontend works with the DevTinder backend built using Node.js, Express, and MongoDB.

👉 Backend repo: [devxsagar/devtinder-backend](https://github.com/devxsagar/DevTinder-backend)

## 👨‍💻 Author

**Sagar Mitra**
Frontend / Full Stack Developer

- [Portfolio](https://sagar-portfolio-dxs.vercel.app/)
- [Twitter](https://x.com/devxsagar)
- [LinkedIn](https://www.linkedin.com/in/sagar-mitra19/)
---

<div align="center">
⭐ If you like this project, feel free to star the repository!
</div>
