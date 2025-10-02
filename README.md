# To-Do List Frontend

This is the **frontend** part of the To-Do List application. It provides a user interface to create, view, edit, and delete tasks. The frontend is built with **React**, **Redux Toolkit**, and **Formik**.

## ✨ Features

- Interactive UI for managing to-do tasks
- Create, edit, and delete to-dos
- Filtering and searching tasks
- Sorting by priority and status
- Form validation using **Formik + Yup**
- State management with **Redux Toolkit**
- Responsive design with **TailwindCSS**

## 🛠 Technologies Used

- **React** – UI library
- **Redux Toolkit** – state management
- **React Router** – routing
- **Formik + Yup** – forms and validation
- **TailwindCSS** – styling
- **Axios / Fetch** – API requests
- **Vite** – fast build tool

## 🚀 Installation

Clone the repository:

```bash
git clone git@github.com:karinahurzan/to-do-list-frontend.git
cd to-do-list-frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will be available at http://localhost:5173/

## 🔗 Backend

This frontend works with the backend:  
👉 [to-do-list-nce4.onrender.com](https://to-do-list-nce4.onrender.com/)  
👉 Backend repository: [karinahurzan/to-do-list](https://github.com/karinahurzan/to-do-list)

## 📌 Main Page

- **Todos Page** – view all tasks
- **Add/Edit Todo Modal** – create or edit tasks
- **Filters & Search** – search, filter, and sorting

## 📝 Example API Usage

```javascript
import axios from "axios";
import { api } from "../../api/axios";

export const fetchTodos = async () => {
  const { data } = await axios.get(`${api}/todos`);
  return data;
};
```

## 🤝 Contributing

Please open issues or submit pull requests for improvements or bug fixes.

## 📄 License

This project is licensed under the **MIT License**.

---

👩‍💻 Author: [Karina Hurzan](https://github.com/karinahurzan)  
💼 LinkedIn: [Karina Hurzan](https://www.linkedin.com/in/karina-hurzan/)
