import psycopg2
from config import config

def insert_course(course_name):
    sql = """INSERT INTO (course_name)
             VALUES(%s) RETURNING course_id;"""

    try:
        # read database
        params = config()

        # connect to database
        conn = psycopg2.connect(**params)