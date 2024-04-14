from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup as Bs
import os

options = Options()
options.add_argument('--headless')
options.add_argument('--disable-gpu')


def get_driver():
    selenium_url = os.getenv('SELENIUM_URL')
    if selenium_url:
        driver = webdriver.Remote(selenium_url, options=options)
    else:
        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    return driver


def handle_content(soup):
    for tag in soup(['script', 'style', 'link', 'head']):
        tag.decompose()

    body = soup.find('body')
    if body:
        for script in body.find_all('script'):
            script.decompose()

        unique_texts = set()
        for element in body.find_all(string=True):
            text = element.strip()
            if text:
                unique_texts.add(text)

        return unique_texts
    else:
        return set()


def scrape(url):
    driver = get_driver()
    try:
        driver.get(url)
        page = driver.page_source
        soup = Bs(page, "html.parser")
        content = handle_content(soup)
        result = ''.join(content).replace('\n', ' ').replace("\"", ' ')
        print(result)
        return result
    finally:
        driver.quit()


if __name__ == '__main__':
    scrape('https://forte.kz/black?_gl=1*13r88hy*_ga*MzgzOTc0MTgwLjE3MTI5OTM0NDg.*_ga_P6DFNQT8GT*MTcxMzAxMzgzNC4yLjEuMTcxMzAxNDkyNS42MC4wLjA.')