# StayByRail

Find affordable hotels near train and metro stations in cities worldwide.

- **Frontend:** React + Vite (Cloudflare Pages)
- **Backend:** FastAPI (Render)
- **Data:** SerpAPI (Google Hotels), Booking.com, TripAdvisor
- **Maps:** Leaflet + OpenStreetMap

## Cities

Tokyo, London, Paris, Osaka, Barcelona, Bangkok, Berlin, Kyoto, Madrid, Birmingham, Krabi

## Dev Setup

```bash
# Backend
cd backend && pip install -r requirements.txt && uvicorn main:app --port 4850

# Frontend
cd frontend && npm install && npm run dev
```
