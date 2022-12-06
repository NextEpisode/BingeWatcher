import mysql.connector
from flask import jsonify
from os import environ 


class TVKatalogueDAO:
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
    #tvkataloguename = 'mytvkataloguename' 
    #password = 'mypassword' 
    # ENCRYPT defaults to yes starting in ODBC Driver 18. It's good to always specify ENCRYPT=yes on the client side to avoid MITM attacks.
    #cnxn = pyodbc.connect('DRIVER={ODBC Driver 18 for SQL Server};SERVER='+server+';DATABASE='+database+';ENCRYPT=yes;UID='+tvkataloguename+';PWD='+ password)
    #cursor = cnxn.cursor()


    def getAllTVKatalogues(self):
        cursor = self.conn.cursor()
        query = "select * from tvkatalogue;"
        cursor.execute(query)
        result = []
        for row in cursor:
            result.append(row)
        return result

    def getTVKataloguesByKID(self, kid):
        cursor = self.conn.cursor()
        query = "select * from tvkatalogue Where kid = %s;"
        cursor.execute(query, (kid,))
        result = []
        for row in cursor:
            result.append(row)
        return result
    
    def getTVKataloguesByKIDTVID(self, kid, tvid):
        cursor = self.conn.cursor()
        query = "select * from tvkatalogue Where kid = %s and tvid = %s;"
        cursor.execute(query, (kid, tvid))
        result = cursor.fetchone()
        return result


    def getAllTVKataloguesByStatus(self, kid, status):
        cursor = self.conn.cursor()
        query = "select * from tvkatalogue where kid = %s and tvkustatus = %s;"
        cursor.execute(query, (kid, status))
        result = []
        for row in cursor:
            result.append(row)
        return result
    
    def getExistingEntry(self, kid, tvid):
        cursor = self.conn.cursor()
        query = "select * from tvkatalogue Where kid = %s and tvid = %s;"
        cursor.execute(query, (kid, tvid))
        result = cursor.fetchone()
        return result

    def insert(self, kid, tvid, tvkustatus, tvkuseason, tvkuepisode):
        cursor = self.conn.cursor()
        query = "insert into tvkatalogue(kid, tvid, tvkustatus, tvkuseason, tvkuepisode) values (%s, %s, %s,%s,%s) ;"
        cursor.execute(query, (kid, tvid, tvkustatus, tvkuseason, tvkuepisode))
        self.conn.commit()
        return kid
    
    def updateKatalogue(self, kid, tvid, tvkustatus, tvkuseason, tvkuepisode):
        cursor = self.conn.cursor()
        query = "update tvkatalogue set tvkustatus = %s, tvkuseason = %s, tvkuepisode = %s where tvid = %s and kid=%s;"
        cursor.execute(query, (tvkustatus, tvkuseason, tvkuepisode, tvid, kid))
        self.conn.commit()
        return kid

    def updateKatalogueStat(self, kid, tvid, tvkustatus):
        cursor = self.conn.cursor()
        query = "update tvkatalogue set tvkustatus = %s where tvid = %s and kid=%s;"
        cursor.execute(query, (tvkustatus, tvid, kid))
        self.conn.commit()
        return kid

    def updateKatalogueSeas(self, kid, tvid, tvkuseason,):
        cursor = self.conn.cursor()
        query = "update tvkatalogue set tvkuseason = %s where tvid = %s and kid=%s;"
        cursor.execute(query, (tvkuseason, tvid, kid))
        self.conn.commit()
        return kid

    def updateKatalogueEpis(self, kid, tvid, tvkuepisode):
        cursor = self.conn.cursor()
        query = "update tvkatalogue set tvkuepisode = %s where tvid = %s and kid=%s;"
        cursor.execute(query, (tvkuepisode, tvid, kid))
        self.conn.commit()
        return kid

    def updateStatus(self, tvkid, kid, tvid, tvkustatus):
        cursor = self.conn.cursor()
        query = "update tvkatalogue set tvkustatus = %s where tvid = %s and kid=%s;"
        cursor.execute(query, (tvkustatus, tvid, kid))
        self.conn.commit()
        return tvkid
    
    def updateSeason(self, tvkid, kid, tvid, tvkuseason):
        cursor = self.conn.cursor()
        query = "update tvkatalogue set tvkuseason = %swhere tvid = %s and kid=%s;"
        cursor.execute(query, (tvkuseason,tvid, kid))
        self.conn.commit()
        return tvkid
    
    def updateEpisode(self, tvkid, kid, tvid, tvkuepisode):
        cursor = self.conn.cursor()
        query = "update tvkatalogue set tvkuepisode = %s where tvid = %s and kid=%s;"
        cursor.execute(query, (tvkuepisode, tvid, kid))
        self.conn.commit()
        return tvkid
    
    def delete(self, kid, tvid):
        cursor = self.conn.cursor()
        query = "delete from tvkatalogue where kid = %s and tvid = %s;"
        cursor.execute(query, (kid, tvid))
        self.conn.commit()
        return kid
    
    def deleteAll(self, KID):
        cursor = self.conn.cursor()
        query = "delete from tvkatalogue where kid = %s;"
        cursor.execute(query, (KID,))
        self.conn.commit()
        return KID

    def getUserKID(self, uid):
        cursor = self.conn.cursor()
        query = "select KID from users Where uid = %s;"
        cursor.execute(query, (uid,))
        result = cursor.fetchone()[0]
        return result
    #Make 3. Updates each one separately. 