# DealScope

**Spot the Best Deals Instantly**

DealScope is a modern, full-stack web application that allows users to search for products on Snapdeal and instantly fetch detailed product information including titles, prices, ratings, images, and product links — all in a clean, responsive interface.

## Tech Stack

- **Frontend**: React.js (Vite, Tailwind CSS)
- **Backend**: Flask (Python), BeautifulSoup, Requests

---

## Clone this repository
   ```bash
   git clone https://github.com/NeerajVermaGPS/Snapdeal-Scrapper.git
   cd snapdeal-scraper
   ```

---

## Backend Setup (Flask)

### 1. Navigate to the backend folder:

```bash
cd server
```

### 2. Create a virtual environment (optional but recommended):

```bash
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
```

### 3. Install dependencies:

```bash
pip install -r requirements.txt
```

### 4. Set environment variables (inside `.env` file):

```env
FLASK_APP=app.py
FLASK_ENV=development
```

### 5. Run the server:

```bash
flask run
```

> Your API will be available at: `http://127.0.0.1:5000/api/scrape?q=shirt`

---

## Frontend Setup (React + Vite)

### 1. Navigate to the frontend folder:

```bash
cd client
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Run the development server:

```bash
npm run dev
```

> The frontend will run at: `http://localhost:5173`

Make sure the Flask backend is running in parallel.

---

## API Endpoint

**GET** `/api/scrape?q=search_term`

### Example:
```
http://127.0.0.1:5000/api/scrape?q=laptop
```

### Response Format (JSON):

```json
[
  {
    "Product": 1,
    "Title": "Product Name",
    "Price": "499",
    "Link": "https://www.snapdeal.com/product-link",
    "Image Link": "https://image-link",
    "rating": 4.3
  },
  ...
]
```
---

## Author

Designed, developed, and maintained by [Neeraj Verma](https://neerajvermagps.infinityfreeapp.com/)