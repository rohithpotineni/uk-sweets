from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI(title="UK Sweets API", version="0.1.0")


@app.get("/health")
def health_check() -> JSONResponse:
    return JSONResponse({"status": "ok", "service": "uk-sweets-backend"})


@app.get("/")
def root() -> JSONResponse:
    return JSONResponse({"message": "Welcome to the UK Sweets API"})
