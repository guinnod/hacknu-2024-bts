import requests
from utils import custom_log


destination_url = "https://opti-cash-api.vercel.app/api/cashback/create/"


def send_scraping_results(key, content):
    data = {
        "bank_card_type_id": key,
        "content": content
    }
    response = requests.post(destination_url, data=data)
    if 200 <= response.status_code <= 299:
        custom_log(f"For key \"{key}\" result sending result is: {response.text}")
    else:
        custom_log(f"For key \"{key}\" result not sending result is: {response.status_code}")
