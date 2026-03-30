# StayByRail - Project Instructions

## Architecture
- **Frontend:** React + Vite (in `frontend/`), dev port 4851
- **Backend:** FastAPI Python (in `backend/`), dev port 4850
- **Data:** SerpAPI (Google Hotels) for hotel search
- **Maps:** Leaflet + OpenStreetMap with CARTO tiles
- **Ads:** Google AdSense (loaded dynamically by AdUnit component, not in index.html)

## Deployment
Deploy manually after pushing — GitHub auto-deploy is not connected.

**Frontend (Cloudflare Pages):**
```bash
cd frontend && VITE_API_URL=https://staybyrail-api.onrender.com/api npm run build && npx wrangler pages deploy dist --project-name staybyrail
```
IMPORTANT: Must set `VITE_API_URL` for production. The local `.env` has `localhost` which breaks the live site.

**Backend (Render):**
```bash
curl -s https://api.render.com/deploy/srv-d74ipo450q8c73e0ssl0?key=tyYmUd-5HWM
```

## Dev Setup
```bash
# Backend
cd backend && pip install -r requirements.txt && uvicorn main:app --port 4850

# Frontend
cd frontend && npm install && npm run dev
```

## Key Decisions
- Use non-standard ports (4850/4851) to avoid conflicts with other local apps
- Form uses `noValidate` — all validation handled in JS, not native HTML5 (mobile compatibility)
- Leaflet MapContainer needs a `RecenterMap` child component to re-center on new searches
- AdSense script must NOT be in index.html — AdUnit.jsx handles loading dynamically
