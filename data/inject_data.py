import os
import sys
from typing import Dict
import pandas as pd
import psycopg2
from dotenv import load_dotenv
import logging

logging.basicConfig()
logging.getLogger("sqlalchemy.engine").setLevel(logging.DEBUG)

load_dotenv()

df = pd.read_csv("cluster-data.csv", delimiter=";", decimal=",")
df[["artist", "track_name"]] = df[["artist", "track_name"]].astype(str)

db_credentials = {
    "dbname": os.environ["DBNAME"],
    "user": os.environ["DBUSER"],
    "password": os.environ["DBPASS"],
    "host": os.environ["DBHOST"],
}


def connect(credentials: Dict):
    """ Connect to the PostgreSQL database server """
    conn = None
    try:
        print("Connecting to the PostgreSQL database...")
        conn = psycopg2.connect(**credentials)
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
        sys.exit(1)
    print("Connection successful")
    return conn


def execute_many(conn, df, table):
    """
    Using cursor.executemany() to insert the dataframe
    """
    # Create a list of tuples from the dataframe values
    tuples = [tuple(x) for x in df.to_numpy()]
    # Comma-separated dataframe columns
    cols = ",".join(list(df.columns))
    # SQL quert to execute
    query = "INSERT INTO %s(%s) VALUES(%%s,%%s,%%s,%%s,%%s,%%s)" % (table, cols)
    cursor = conn.cursor()
    for t in tuples:
        try:
            cursor.executemany(query, [t])
            conn.commit()
        except (Exception, psycopg2.DatabaseError) as error:
            print("Error: %s" % error)
            print(f"Error line: {t}")
            conn.rollback()
            cursor.close()
            return 1
        print("execute_many() done")
    cursor.close()


conn = connect(db_credentials)
execute_many(conn, df, "resume_clusterdata")
