# ResumePro

A full-stack resume builder that lets users register, create multiple resumes,
edit them with a live preview, and download them as a PDF.

## Tech Stack

- **Frontend:** React (Vite), React Router, Axios, html2pdf.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Auth:** JWT (JSON Web Tokens) + bcrypt password hashing

## Folder Structure

```
resumepro/
├── backend/
│   ├── config/db.js              # MongoDB connection
│   ├── models/                   # Mongoose schemas (User, Resume)
│   ├── controllers/              # Route logic (auth, resume CRUD)
│   ├── routes/                   # Express routers
│   ├── middleware/                # JWT auth guard, error handler
│   ├── utils/generateToken.js    # JWT signing helper
│   └── server.js                 # App entry point
│
└── frontend/
    └── src/
        ├── components/            # Reusable UI (forms, navbar, preview)
        ├── pages/                 # Login, Register, Dashboard, Builder
        ├── context/AuthContext.jsx # Global login state
        ├── services/              # Axios calls to the backend
        └── utils/downloadPDF.js  # Client-side PDF export
```

## How It Works

1. **Auth:** User registers/logs in → backend hashes password with bcrypt,
   returns a JWT → frontend stores it in `localStorage` → every future
   request sends it in the `Authorization: Bearer <token>` header.
2. **Protected routes:** `authMiddleware.js` on the backend verifies the JWT
   before letting a request touch resume data. `PrivateRoute.jsx` on the
   frontend redirects to `/login` if there's no logged-in user.
3. **Resume CRUD:** Each resume document is linked to a `user` ID in MongoDB,
   so users can only ever see/edit/delete their own resumes (checked in
   `resumeController.js`).
4. **Live preview + PDF:** The Builder page keeps resume data in React state,
   renders it instantly in `TemplateClassic.jsx`, and `html2pdf.js` converts
   that same DOM element into a downloadable PDF - no server round trip needed.

## Running Locally

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env   # then fill in MONGO_URI and JWT_SECRET
npm run dev
```

Backend runs on `http://localhost:5000`.

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173` (Vite proxies `/api` calls to the
backend automatically, so CORS isn't an issue in dev).

### 3. MongoDB

Either run MongoDB locally (`mongod`) or use a free
[MongoDB Atlas](https://www.mongodb.com/atlas) cluster and paste its
connection string into `MONGO_URI` in `.env`.

## API Endpoints

| Method | Endpoint            | Description              | Auth Required |
|--------|---------------------|---------------------------|:---:|
| POST   | `/api/auth/register` | Register new user        | No  |
| POST   | `/api/auth/login`    | Login, returns JWT        | No  |
| GET    | `/api/auth/me`       | Get logged-in user        | Yes |
| GET    | `/api/resumes`       | List user's resumes       | Yes |
| POST   | `/api/resumes`       | Create a resume           | Yes |
| GET    | `/api/resumes/:id`   | Get one resume            | Yes |
| PUT    | `/api/resumes/:id`   | Update a resume           | Yes |
| DELETE | `/api/resumes/:id`   | Delete a resume           | Yes |

## Possible Future Additions

- Multiple resume templates (a `modern` template is already scaffolded in the schema)
- Image/profile picture upload
- Public shareable resume link
