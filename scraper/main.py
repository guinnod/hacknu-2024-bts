from fastapi import FastAPI
from pydantic import BaseModel
from worker import queue
from jobs import scrape_and_send


app = FastAPI()


class ScrapingDTO(BaseModel):
    key: int
    url: str


@app.post("/scraping-job/")
async def create_scraping_job(scraping_dto: ScrapingDTO):
    key = scraping_dto.key
    url = scraping_dto.url
    job = queue.enqueue(scrape_and_send, key, url)
    return {"job_id": job.get_id()}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
