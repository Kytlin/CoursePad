import psycopg2
from config import config


def create_tables():
    commands = (
        """
        CREATE TABLE program (
            program_id SERIAL PRIMARY KEY,
            program_name VARCHAR(255) NOT NULL
        )
        """,
        """ 
        CREATE TABLE courses (
            course_id SERIAL PRIMARY KEY,      
            course_code VARCHAR(7) NOT NULL,
            course_type VARCHAR(30) NOT NULL,
            course_weight FLOAT8,
            course_grade FLOAT8
        )"""
    )
    conn = None

    try: 
        # read connection parameters
        params = config()

        # connect to server
        conn = psycopg2.connect(**params)
        cur = conn.cursor()

        # create table one at a time
        for command in commands:
            cur.execute(command)

        # close communication to server
        cur.close()

        # commit changes
        conn.commit()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()

if __name__ == '__main__':
    create_tables()    