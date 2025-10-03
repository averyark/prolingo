# Prolingo

A language learning application built with Django (backend) and React (frontend).

## System Requirements

- **Python 3.13+** with pip
- **Node.js 22+** with npm/pnpm
- **PostgreSQL 13+**

## Installation Guide

Follow these steps after extracting the Prolingo zip file:

### 1. Install Required Software

Download and install the following if not already installed:

- [Python 3.13+](https://www.python.org/downloads/) - Make sure to check "Add Python to PATH" during installation
- [Node.js 22+](https://nodejs.org/en/download/) - Includes npm package manager
- [PostgreSQL 13+](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) - Remember the password you set for the `postgres` user

### 2. Extract and Navigate to Project

1. Extract the Prolingo zip file to your desired location
2. Open Command Prompt (Windows) or Terminal (macOS/Linux)
3. Navigate to the extracted folder:
   ```bash
   cd path\to\prolingo
   ```

### 3. Set Up Python Virtual Environment

**Windows:**
```bash
python -m venv .venv
.venv\Scripts\activate
```

**macOS/Linux:**
```bash
python3 -m venv .venv
source .venv/bin/activate
```

Verify the virtual environment is active (you should see `(.venv)` in your command prompt).

### 4. Install Backend Dependencies

```bash
cd backend
pip install -r requirements.txt
```

### 5. Set Up PostgreSQL Database

1. **Start PostgreSQL service** (if not running automatically)

2. **Connect to PostgreSQL:**
   ```bash
   psql -U postgres
   ```
   Enter the password you set during PostgreSQL installation.

3. **Create database and user:**
   ```sql
   CREATE DATABASE prolingo;
   CREATE USER prolingo_user WITH PASSWORD 'prolingo123';
   GRANT ALL PRIVILEGES ON DATABASE prolingo TO prolingo_user;
   ALTER USER prolingo_user CREATEDB;
   \q
   ```

### 6. Configure Environment Variables

The project includes `.env` files with default configuration. If you used different database credentials in step 5, update the backend `.env` file:

**Edit `backend/.env`:**
```bash
DB_HOST="localhost"
DB_PORT="5432"
DB_USER="prolingo_user"
DB_NAME="prolingo"
DB_PWD="prolingo123"
```
### 7. Set Up Django Database

From the `backend` directory:
```bash
python manage.py makemigrations
python manage.py migrate
```

If migrations are missing for some apps:
- Ensure each app is listed in INSTALLED_APPS.
- For apps using a models/ package (directory) instead of a single models.py:
    1. The folder must contain an `__init__.py`.
    2. Import submodules inside `models/__init__.py`, for example:
         ```python
         from .user import *
         from .course import *
         ```
    3. Re-run:
         ```bash
         python manage.py makemigrations
         ```
- To force per-app generation (helpful when one app fails e.g: achievements):
    ```bash
    python manage.py makemigrations achievements
    ```

- Do it for all the similar apps: courses, feedback, gameinfo, premium, & streaks

- If you still see "No changes detected" but expect models, open Django shell to confirm import:
    ```bash
    python manage.py shell
    >>> from accounts.models import SomeModel
    ```

Then apply:
```bash
python manage.py migrate
```

### 8. Create Django Superuser (Admin Account)

```bash
python manage.py createsuperuser
```
Follow the prompts to create an admin account for accessing the Django admin panel.

### 9. Install Frontend Dependencies

Open a **new terminal/command prompt** and navigate to the frontend:
```bash
cd path\to\prolingo\web
npm install
```

### 10. Start the Application

You'll need **two terminal windows** open:

**Terminal 1 - Backend (from `backend` directory):**
```bash
python manage.py runserver
```
The backend API will run at: http://127.0.0.1:8000

**Terminal 2 - Frontend (from `web` directory):**
```bash
npm run dev
```
The frontend application will run at: http://localhost:5173

### 11. Access the Application

- **Main Application:** http://localhost:5173
- **Admin Panel:** http://127.0.0.1:8000/admin (use the superuser account created in step 8)
- **API Documentation:** http://127.0.0.1:8000/api/schema/swagger-ui/

## Troubleshooting

### Common Issues:

**1. "python command not found"**
- Ensure Python is added to your system PATH
- On Windows, try `py` instead of `python`

**2. "psql command not found"**
- Add PostgreSQL bin directory to your system PATH
- Or use pgAdmin GUI tool instead

**3. Database connection error**
- Verify PostgreSQL is running
- Check database credentials in `backend/.env`
- Ensure the database `prolingo` exists

**4. Port already in use**
- Backend (port 8000): Stop other Django applications or change port with `python manage.py runserver 8001`
- Frontend (port 5173): Vite will automatically use the next available port

**5. Frontend build errors**
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

## Stopping the Application

To stop the servers:
1. Press `Ctrl+C` in both terminal windows
2. Deactivate the Python virtual environment: `deactivate`
