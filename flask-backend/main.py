from flask import Flask, request
from flask import jsonify
from handler.UserHandler import UserHandler
from handler.MovieKatalogueHandler import MovieKatalogueHandler
from handler.TVKatalogueHandler import TVKatalogueHandler
from flask_cors import CORS

# Activate
app = Flask(__name__)
# Apply CORS to this app
CORS(app)


@app.route('/')
def greeting():
    return 'Welcome!!!'


##Request JSON Changes (For UID)
#Implement Get All (And test potential code issues)


#User Area ------------------------------------------------------
@app.route('/rBUWxJYlyR', methods=['GET'])
def users():
    if request.method == 'GET':
            return UserHandler().getAllUsers() #Works

@app.route('/YJb5c9dNkT/opt', methods=['GET', 'POST', 'PUT', 'DELETE'])
def useropt():
    if request.method == 'GET':
            print("REQUEST: ", request.json)
            return UserHandler().getUserByGoogleId(request.json) #Works
    else:
        if request.method == 'POST':
            print("REQUEST: ", request.json)
            return UserHandler().insertUserJson(request.json) #Works
        else:
            if request.method == "PUT":
                print("REQUEST: ", request.json)
                return UserHandler().updateUserJson(request.json)#Works
            else:
                 if request.method == "DELETE":
                    print("REQUEST: ", request.json)
                    return UserHandler().deleteUser(request.json)#Works

#User Area ------------------------------------------------------

                 
#Movie Area-----------------------------------------------------------------
#Segment of Code for Routes regarding Movie or TV katalogues

@app.route('/loiGET2r8Z', methods=['GET'])
def mk():
    if request.method == 'GET':
            return MovieKatalogueHandler().getAllMovieKatalogues() #Works


@app.route('/JhvFJAEmLK/opt', methods=['GET', 'POST', 'PUT', 'DELETE'])
def mkopt():
    if request.method == 'GET':
            print("REQUEST: ", request.json)
            return MovieKatalogueHandler().getAllMovieKataloguesByKID(request.json) #Works
    else:
        if request.method == 'POST':
            print("REQUEST: ", request.json)
            return MovieKatalogueHandler().insertMovieKatalogueJson(request.json) #Works
        else:
            if request.method == "PUT":
                print("REQUEST: ", request.json)
                return MovieKatalogueHandler().updateMovieKatalogueJson(request.json) #Works
            else:
                 if request.method == "DELETE":
                    print("REQUEST: ", request.json)
                    return MovieKatalogueHandler().deleteMovieKatalogue(request.json) #Works
                 
#Search by Status. Try to put this with the rest later.
@app.route('/oGtFIapbXb/stat', methods=['GET'])
def mkstat():
    if request.method == 'GET':
            print("REQUEST: ", request.json)
            return MovieKatalogueHandler().getAllMovieKataloguesByStatus(request.json) #Works
#Movie Area-----------------------------------------------------------------
#TV Area--------------------------------------------------------------------

@app.route('/Pn4yDzjDzy', methods=['GET'])
def tv():
    if request.method == 'GET':
            return TVKatalogueHandler().getAllTVKatalogues() #Works

@app.route('/zZPJMflCtI/opt', methods=['GET', 'POST', 'PUT', 'DELETE'])
def tvopt():
    if request.method == 'GET':
            print("REQUEST: ", request.json)
            return TVKatalogueHandler().getAllTVKataloguesByKID(request.json)#Works
    else:
        if request.method == 'POST':
            print("REQUEST: ", request.json)
            return TVKatalogueHandler().insertTVKatalogueJson(request.json)#Works
        else:
            if request.method == "PUT":
                print("REQUEST: ", request.json)
                return TVKatalogueHandler().updateTVkatalogueJson(request.json)#Works
            else:
                 if request.method == "DELETE":
                    print("REQUEST: ", request.json)
                    return TVKatalogueHandler().deleteTVkatalogue(request.json) #Works
                 
    #Works. Put with the rest later.
@app.route('/f4doxSOsA7/stat', methods=['GET'])
def tvkstat():
    if request.method == 'GET':
        print("REQUEST: ", request.json)
        return TVKatalogueHandler().getAllTVKataloguesByStatus(request.json)#Works

#TV Area--------------------------------------------------------------------
    
#Purge Area--------------------------------------------------------------------
#Working on it
@app.route('/PSnDgAg2Mt', methods=['DELETE']) #Works
def purge():
    print("REQUEST: ", request.json)
    if UserHandler().getUserById(request.json):
        TVKatalogueHandler().deleteAllTVKataloguesByKID(request.json)
        MovieKatalogueHandler().deleteAllMovieKataloguesByKID(request.json)
        UserHandler().deleteUser(request.json)
        return jsonify(DeleteStatus = "Purge Complete."), 200
    else:
         return jsonify(Error="User doesn't exist."), 404
    

#KID Purge
@app.route('/divAR9KhdT/prg', methods=['DELETE'])
def mkprg():
    if request.method == 'DELETE':
            print("REQUEST: ", request.json)
            return MovieKatalogueHandler().deleteAllMovieKataloguesByKID(request.json) #Works
    
#KID Purge
@app.route('/uafLzIOIdX/prg', methods=['DELETE'])
def tvkprg():
    if request.method == 'DELETE':
            print("REQUEST: ", request.json)
            return TVKatalogueHandler().deleteAllTVKataloguesByKID(request.json) #Works


    #Maybe Method
# Purge Area--------------------------------------------------------------------

#Finish purge, finish segmented update, check for any irrelevant code.
#Blob research. How to use in python and how to




if __name__ == '__main__':
    app.run()