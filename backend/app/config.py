import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:postgres@localhost:5432/uk_sweets")
STRIPE_SECRET_KEY = os.getenv("STRIPE_SECRET_KEY", "")
RESEND_API_KEY = os.getenv("RESEND_API_KEY", "")
