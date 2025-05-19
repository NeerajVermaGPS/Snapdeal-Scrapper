from flask import Flask, request, jsonify
from scraper import scrape_snapdeal
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
frontend_url = os.getenv("FRONTEND_ORIGIN")
CORS(app, resources={r"/api/*": {"origins": frontend_url}})

@app.route('/api/scrape', methods=['GET'])
def scrape():
    query = request.args.get('q')
    if not query:
        return jsonify({"error": "Missing search query (parameter 'q')"}), 400

    products, error = scrape_snapdeal(query)
    if error:
        return jsonify({"error": error}), 500

    return jsonify(products), 200

if __name__ == '__main__':
    app.run(debug=True)