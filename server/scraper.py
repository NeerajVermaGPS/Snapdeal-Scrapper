import requests
from bs4 import BeautifulSoup
import time

def scrape_snapdeal(query):
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
            "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
        )
    }

    products = []
    url = f"https://www.snapdeal.com/search?keyword={query}"

    try:
        for _ in range(5):  # Retry 5 times
            response = requests.get(url, headers=headers)
            if response.status_code != 200:
                time.sleep(1)
                continue
            break
        else:
            return [], "Failed to retrieve data from Snapdeal"

        soup = BeautifulSoup(response.text, 'html.parser')
        product_elements = soup.find_all('div', class_='product-tuple-listing')

        for i, product_element in enumerate(product_elements, 1):
            try:
                title = product_element.find('p', class_='product-title').text.strip()
            except:
                title = "N/A"

            try:
                price = product_element.find('span', class_='lfloat product-price').text.strip()[4:]
            except:
                price = "N/A"

            try:
                product_link = product_element.find('a', class_='dp-widget-link')['href']
            except:
                product_link = "N/A"

            try:
                product_img = product_element.find('source', class_='product-image')['srcset']
            except:
                product_img = "N/A"

            try:
                stars = product_element.find('div', class_='filled-stars').get('style')
                rating = int(stars[6:8]) / 20
            except:
                rating = "N/A"

            products.append({
                "Product": i,
                "Title": title,
                "Price": price,
                "Link": product_link,
                "Image Link": product_img,
                "Rating": rating
            })

        return products, None

    except Exception as e:
        return [], str(e)
