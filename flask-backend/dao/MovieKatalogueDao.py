import mysql.connector
from flask import jsonify
from os import environ 

class MovieKatalogueDAO:
    def __init__(self):
        connection_url = mysql.connector.connect(
            user=environ.get('DB_USER','root'), 
            password=environ.get('DB_PASSWORD', '7676'),
            host=environ.get('DB_HOST', 'localhost'), 
            database=environ.get('DB_DATABASE', 'bingewatcher')
        )
        ##connection_url = MySQLdb.connect(host="localhost", user='root', passwd='root', db='BeyondHorizonsDB')
        self.conn = connection_url

    #server = 'tcp:myserver.database.windows.net' 
    #database = 'mydb' 
    #moviekataloguename = 'mymoviekataloguename' 
    #password = 'mypassword' 
    # ENCRYPT defaults to yes starting in ODBC Driver 18. It's good to always specify ENCRYPT=yes on the client side to avoid MITM attacks.
    #cnxn = pyodbc.connect('DRIVER={ODBC Driver 18 for SQL Server};SERVER='+server+';DATABASE='+database+';ENCRYPT=yes;UID='+moviekataloguename+';PWD='+ password)
    #cursor = cnxn.cursor()

    def getAllMovieKatalogues(self):
        cursor = self.conn.cursor()
        query = "select * from moviekatalogue;"
        cursor.execute(query)
        result = []
        for row in cursor:
            result.append(row)
        return result
    
    def getMovieKataloguesByKID(self, kid):
        cursor = self.conn.cursor()
        query = "select * from moviekatalogue Where kid = %s;"
        cursor.execute(query, (kid,))
        result = []
        for row in cursor:
            result.append(row)
        return result

    def getMovieKataloguesByStatus(self, KID, status):
        cursor = self.conn.cursor()
        query = "select * from moviekatalogue Where KID = %s and mkustatus = %s;"
        cursor.execute(query, (KID, status))
        result = []
        for row in cursor:
            result.append(row)
        return result
    
    def getExistingEntry(self, kid, movieid):
        cursor = self.conn.cursor()
        query = "select * from moviekatalogue Where kid = %s and movieid = %s;"
        cursor.execute(query, (kid, movieid))
        result = cursor.fetchone()
        return result

    def insert(self, kid, movieid, mkustatus):
        cursor = self.conn.cursor()
        query = "insert into moviekatalogue(kid, movieid, mkustatus) values (%s, %s, %s) ;"
        cursor.execute(query, (kid, movieid, mkustatus))
        query = "SELECT LAST_INSERT_ID();"
        cursor.execute(query)
        result = cursor.fetchone()[0]
        self.conn.commit()
        return result

    def delete(self, kid, movieid):
        cursor = self.conn.cursor()
        query = "delete from moviekatalogue where kid = %s and movieid = %s;"
        cursor.execute(query, (kid, movieid))
        self.conn.commit()
        return kid
    
    def deleteAll(self, KID):
        cursor = self.conn.cursor()
        query = "delete from moviekatalogue where kid = %s;"
        cursor.execute(query, (KID,))
        self.conn.commit()
        return KID

    def update(self, kid, movieid, mkustatus):
        cursor = self.conn.cursor()
        query = "update moviekatalogue set mkustatus=%s where movieid =%s and kid = %s;"
        cursor.execute(query, (mkustatus, movieid, kid))
        self.conn.commit()
        return kid
    
    def getUserKID(self, uid):
        cursor = self.conn.cursor()
        query = "select KID from users Where uid = %s;"
        cursor.execute(query, (uid,))
        result = cursor.fetchone()[0]
        return result