import mysql.connector
from flask import jsonify
from os import environ 


class UserDAO:

    def __init__(self):
        connection_url = mysql.connector.connect(
            user=environ.get('DB_USER','root'), 
            password=environ.get('DB_PASSWORD', '7676'),
            host=environ.get('DB_HOST', 'localhost'), 
            database=environ.get('DB_DATABASE', 'bingewatcher')
        )
        ##connection_url = MySQLdb.connect(host="localhost", user='root', passwd='root', db='BeyondHorizonsDB')
        self.conn = connection_url

    #cnx = connection.MySQLConnection(user='scott', password='password',
    #                             host='127.0.0.1',
    #                             database='employees')

    #server = 'tcp:myserver.database.windows.net' 
    #database = 'mydb' 
    #username = 'myusername' 
    #password = 'mypassword' 
    # ENCRYPT defaults to yes starting in ODBC Driver 18. It's good to always specify ENCRYPT=yes on the client side to avoid MITM attacks.
    #cnxn = pyodbc.connect('DRIVER={ODBC Driver 18 for SQL Server};SERVER='+server+';DATABASE='+database+';ENCRYPT=yes;UID='+username+';PWD='+ password)
    #cursor = cnxn.cursor()


    def getAllUsers(self):
        cursor = self.conn.cursor()
        query = "select * from users;"
        cursor.execute(query)
        result = []
        for row in cursor:
            result.append(row)
        return result

    def getUserById(self, UID):
        cursor = self.conn.cursor()
        query = "select * from users Where uid = %s;"
        cursor.execute(query, (UID,))
        result = cursor.fetchone()
        return result

    def getUserByGoogleId(self, googleid):
        cursor = self.conn.cursor()
        query = "select * from users Where googleid = %s;"
        cursor.execute(query, (googleid,))
        result = cursor.fetchone()
        return result
    
    def getUserKID(self, uid):
        cursor = self.conn.cursor()
        query = "select KID from users Where uid = %s;"
        cursor.execute(query, (uid,))
        result = cursor.fetchone()[0]
        return result
    
    def getUserUID(self, gid):
        cursor = self.conn.cursor()
        query = "select UID from users Where googleid = %s;"
        cursor.execute(query, (gid,))
        result = cursor.fetchone()[0]
        return result


#sql = ("INSERT INTO favourite (number, info) VALUES (%s, %s)", (numbers, animals))
#Mysql example

    def insert(self, googleid, uname):
        cursor = self.conn.cursor()
        query = "insert into users(GoogleID, UName) values (%s, %s);"
        cursor.execute(query, (googleid, uname))
        query = "SELECT LAST_INSERT_ID();"
        cursor.execute(query)
        result = cursor.fetchone()[0]
        self.conn.commit()
        return result

    def insertKID(self, uid):
        cursor = self.conn.cursor()
        query = "update users set kid = '%s' where uid = '%s';"
        cursor.execute(query, (uid, uid))
        self.conn.commit()

    def delete(self, uid):
        cursor = self.conn.cursor()
        query = "delete from users where uid = %s;"
        cursor.execute(query, (uid,))
        self.conn.commit()
        return uid

    def update(self, googleid, uname):
        cursor = self.conn.cursor()
        query = "update users set uname = %s where googleid = %s;"
        cursor.execute(query, (uname, googleid))
        self.conn.commit()
        return googleid

    def lastInsert(self):
        cursor = self.conn.cursor()
        query = "SELECT LAST_INSERT_ID();"
        cursor.execute(query)
        result = cursor.fetchone()[0]
        return result