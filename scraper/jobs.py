from worker import queue
from scrapers import scrape
from api import send_scraping_results
from utils import custom_log


def scrape_and_send(key, url):
    content = scrape(url)
    custom_log(f"For key \"{key}\" scraping has completed successfully")
    job = queue.enqueue(send_scraping_results, key, content)
    custom_log(f"For key \"{key}\" result sender job id is: {job.id}")
