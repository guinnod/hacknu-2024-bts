import os
import requests
from flask import Flask, jsonify
from apscheduler.schedulers.background import BackgroundScheduler


app = Flask(__name__)


def fetch_and_post():
    fetch_url = 'https://opti-cash-api.vercel.app/api/bank-card-type/'
    post_url = 'http://34.118.107.92/scraping-job/'

    try:
        response = requests.get(fetch_url)
        response.raise_for_status()
        data = response.json()

        for item in data:
            post_data = {'key': item['id'], 'url': item['url']}
            post_response = requests.post(post_url, json=post_data)
            post_response.raise_for_status()
            job_info = post_response.json()
            print(f"Posted {item['name']} with job ID {job_info.get('job_id')}")

    except requests.RequestException as e:
        print(f"An error occurred: {e}")


scheduler = BackgroundScheduler()
scheduler.add_job(fetch_and_post, 'interval', hours=12, max_instances=2)
scheduler.start()


@app.route('/trigger', methods=['POST'])
def trigger_fetch_and_post():
    fetch_and_post()
    return jsonify({"message": "Fetch and post process triggered"}), 200


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, port=port)
