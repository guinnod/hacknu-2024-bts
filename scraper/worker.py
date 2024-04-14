from rq import Queue
from redis import Redis
import os


REDIS_HOST = os.getenv('REDIS_HOST', 'localhost')
REDIS_PORT = os.getenv('REDIS_PORT', '6379')
REDIS_DB = os.getenv('REDIS_DB', '0')


REDIS_PORT = int(REDIS_PORT)
REDIS_DB = int(REDIS_DB)


redis_conn = Redis(host=REDIS_HOST, port=REDIS_PORT, db=REDIS_DB)
queue = Queue(connection=redis_conn)
