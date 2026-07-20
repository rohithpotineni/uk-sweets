# UK Sweets

A full-stack starter application for a modern sweets brand storefront and admin experience.

## Business objective

This project provides a polished foundation for selling sweets online with a modern frontend, a FastAPI backend, and PostgreSQL support for product and order data.

## Tech stack

- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: FastAPI, Uvicorn, Python 3.10+
- Database: PostgreSQL
- Payments: Stripe
- Emails: Resend

## Project structure

```text
frontend/      # Next.js application
backend/       # FastAPI application
```

## Local development

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## Environment variables

Copy the example files and update values before running the app.

```bash
cp .env.example .env
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env
```

## Deployment overview

The app is designed to be deployed with a modern hosting platform such as Vercel for the frontend and Render/Fly.io for the backend.

## Roadmap

- Product catalog and checkout flow
- Admin dashboard for inventory and orders
- Email notifications and payment automation
- Analytics and reporting

## Contribution guidelines

1. Create a branch for your change.
2. Make your updates with clear comments.
3. Run the relevant checks.
4. Open a pull request with a summary of the change.
