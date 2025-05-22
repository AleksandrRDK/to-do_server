# To-Do List Server (Backend)

Это серверная часть MERN-приложения **"To-Do List"**, созданная с использованием **Node.js**, **Express** и **MongoDB**.
Сервер предоставляет REST API для управления задачами: добавление, удаление, обновление, фильтрация.

---

## ⚙️ Технологии

-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
-   [Mongoose](https://mongoosejs.com/) — для работы с базой
-   [dotenv](https://www.npmjs.com/package/dotenv) — переменные окружения
-   [cors](https://www.npmjs.com/package/cors) — для поддержки запросов с клиента
-   [nodemon](https://www.npmjs.com/package/nodemon) — для удобной разработки

---

## 📦 Установка и запуск (локально)

1. Клонируйте репозиторий или скопируйте папку `server`
2. Установите зависимости:

```bash
npm install
```

3. Создайте файл `.env` в корне и добавьте в него:

```env
MONGO_URI=ваш_ключ_от_MongoDB_Atlas
PORT=5000
```

4. Запустите сервер в режиме разработки:

```bash
npm run dev
```

После запуска сервер будет доступен по адресу:
[http://localhost:5000](http://localhost:5000)

---

## 🌐 REST API эндпоинты

| Метод  | URL              | Описание              |
| ------ | ---------------- | --------------------- |
| GET    | `/api/tasks`     | Получить все задачи   |
| POST   | `/api/tasks`     | Добавить новую задачу |
| PATCH  | `/api/tasks/:id` | Обновить задачу по ID |
| DELETE | `/api/tasks/:id` | Удалить задачу по ID  |

Пример задачи:

```json
{
    "name": "Сделать MERN-проект",
    "description": "Frontend + Backend + MongoDB",
    "category": "Учёба",
    "date": "2025-05-20",
    "completed": false
}
```

## 🧠 Особенности

-   🚀 Express-сервер с модульной структурой (`routes`, `models`, `controllers`)
-   🔒 Переменные окружения через `.env`
-   🌍 Подключение к MongoDB Atlas через Mongoose
-   🔁 Поддержка CORS для запросов с фронтенда
-   🛠 Поддержка hot-reload в разработке с помощью `nodemon`
-   📦 Готов к деплою на Render, Railway и другие платформы

---

## 👨‍💻 Автор

**Александр Рудаков**
📧 [aleksandrrdk.code@gmail.com](mailto:aleksandrrdk.code@gmail.com)
📂 [GitHub: AleksandrRDK](https://github.com/AleksandrRDK)
