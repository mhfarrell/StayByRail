<p align="center">
  <img src="frontend/public/logo.svg" alt="StayByRail Logo" width="120" />
</p>

<h1 align="center">StayByRail</h1>

<p align="center">Find hotels near train stations across Japan</p>

---

## Features

- **12 Japanese cities** covered, from Tokyo to Fukuoka
- **50+ train lines** with station-level search
- **Amenity wishlist** -- select up to 5 must-have amenities
- **Walking distance filter** to narrow results by proximity to the station
- **Price comparison** across Booking.com, Agoda, and Expedia
- **OpenStreetMap integration** with interactive Leaflet maps
- **Flexible sorting** by price, rating, distance, or amenity match
- **Dark and light mode** support

## Tech Stack

| Layer    | Technology                        |
| -------- | --------------------------------- |
| Frontend | React + Vite                      |
| Backend  | FastAPI (Python)                  |
| Data     | SerpAPI (Google Hotels)           |
| Maps     | Leaflet / OpenStreetMap           |

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/mhfarrell/StayByRail.git
cd StayByRail
```

### 2. Backend

```bash
cd backend
pip install -r requirements.txt
cp .env.example .env
```

Edit `.env` and add your SerpAPI key, then start the server:

```bash
uvicorn main:app --port 4850
```

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

### 4. Open the app

Visit [http://localhost:4851](http://localhost:4851) in your browser.

## Environment Variables

| Variable        | Required | Description                                      |
| --------------- | -------- | ------------------------------------------------ |
| `SERPAPI_KEY`   | Yes      | API key for SerpAPI (Google Hotels)              |
| `RAPIDAPI_KEY`  | No       | Optional key for supplementary data sources      |
| `VITE_API_URL`  | No       | Backend API URL (defaults to `http://localhost:4850/api`) |
| `VITE_ADSENSE_CLIENT` | No | Google AdSense publisher ID (e.g. `ca-pub-XXXXXXXX`) |

## Deployment

- **Frontend** -- Cloudflare Pages
- **Backend** -- Render or Railway

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).
