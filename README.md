# Book Collection API with Authentication

## Setup

- Run MongoDB locally or configure a cloud MongoDB connection in `app.js`
- Set JWT secret with `JWT_SECRET` environment variable (optional)

## Install dependencies:

```bash
npm install
```

## Run the app:

```bash
npm run dev
```

---

## API Endpoints

### Auth

- `POST /api/auth/register` — Register new user  
  Body: `{ "username": "yourname", "password": "yourpassword" }`

- `POST /api/auth/login` — Login user, returns JWT token  
  Body: `{ "username": "yourname", "password": "yourpassword" }`

### Books

- `GET /api/books` — List books with optional query params:  
  `?page=1&limit=10&author=foo&genre=bar`

- `GET /api/books/:id` — Get a single book by ID

- **Protected routes (require `Authorization: Bearer <token>` header):**

  - `POST /api/books` — Create new book
  - `PUT /api/books/:id` — Update book
  - `DELETE /api/books/:id` — Delete book

---

## Notes

- Passwords are hashed with bcrypt
- JWT tokens expire after 1 hour
- Use tools like Postman to test with Authorization header