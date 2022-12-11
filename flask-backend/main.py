from flask import Flask, request
from flask import jsonify
from handler.UserHandler import UserHandler
from handler.MovieKatalogueHandler import MovieKatalogueHandler
from handler.TVKatalogueHandler import TVKatalogueHandler
from flask_cors import CORS, cross_origin
from algorithm.movie.randomcluster import cluster as rndclust
from algorithm.movie.selectivecluster import selective as slctclust

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
@app.route('/getAllUsers', methods=['GET'])
def users():
    if request.method == 'GET':
            return UserHandler().getAllUsers() #Works, Revised

@app.route('/userRoute/<string:google_id>/', methods=['GET', 'POST', 'PUT', 'DELETE'])
def useropt(google_id):
    if request.method == 'GET':
            return UserHandler().getUserByGoogleId(google_id) #Works, Revised
    else:
        if request.method == 'POST':
            return UserHandler().insertUserJson(request.json) #Works, Revised
        else:
            if request.method == "PUT":
                print("REQUEST: ", request.json)
                return UserHandler().updateUserJson(request.json)#Works, Revised
            else:
                 if request.method == "DELETE":
                    print("REQUEST: ", request.json)
                    return UserHandler().deleteUser(request.json)#Works, Revised

#User Area ------------------------------------------------------

                 
#Movie Area-----------------------------------------------------------------
#Segment of Code for Routes regarding Movie or TV katalogues

@app.route('/getAllMovieKatalogues', methods=['GET'])
def mk():
    if request.method == 'GET':
            return MovieKatalogueHandler().getAllMovieKatalogues() #Works, Revised


@app.route('/movieKatalogueRoute/<int:kID>', methods=['GET', 'POST', 'PUT', 'DELETE'])
def mkopt(kID):
    if request.method == 'GET':
            return MovieKatalogueHandler().getEntriesByMovieKID(kID) #Works, Revised
    else:
        if request.method == 'POST':
            return MovieKatalogueHandler().insertMovieKatalogueJson(request.json) #Works, Revised
        else:
            if request.method == "PUT":
                return MovieKatalogueHandler().updateMovieKatalogueJson(request.json) #Works, Revised
            else:
                 if request.method == "DELETE":
                    return MovieKatalogueHandler().deleteMovieKatalogue(request.json) #Works, Revised
                 
#Search by Status. Try to put this with the rest later.
@app.route('/getKatalogueWithStatus/stat', methods=['GET'])
def mkstat():
    if request.method == 'GET':
            print("REQUEST: ", request.json)
            return MovieKatalogueHandler().getByStatusUsingKID(request.json) #Works, Revised
#Movie Area-----------------------------------------------------------------
#TV Area--------------------------------------------------------------------

@app.route('/getAllTVKatalogues', methods=['GET'])
def tv():
    if request.method == 'GET':
            return TVKatalogueHandler().getAllTVKatalogues() #Works, Revised

@app.route('/TVKatalogueRoute/<int:kID>', methods=['GET', 'POST', 'PUT', 'DELETE'])
def tvopt(kID):
    if request.method == 'GET':
            return TVKatalogueHandler().getAllTVKataloguesByKID(kID)#Works, Revised
    else:
        if request.method == 'POST':
            return TVKatalogueHandler().insertTVKatalogueJson(request.json)#Works, Revised
        else:
            if request.method == "PUT":
                return TVKatalogueHandler().updateTVkatalogueJson(request.json)#Works, Revised
            else:
                 if request.method == "DELETE":
                    return TVKatalogueHandler().deleteTVkatalogue(request.json) #Works, Revised

@app.route('/TVKatalogueRoute/stat', methods=['PUT'])
def tvstat():    
            if request.method == "PUT":
                print("REQUEST: ", request.json)
                return TVKatalogueHandler().updateTVkatalogueStatJson(request.json)#Works, Revised

@app.route('/TVKatalogueRoute/seas', methods=['PUT'])
def tvseas():    
            if request.method == "PUT":
                print("REQUEST: ", request.json)
                return TVKatalogueHandler().updateTVkatalogueSeasJson(request.json)#Works, Revised

@app.route('/TVKatalogueRoute/epis', methods=['PUT'])
def tvepis():    
            if request.method == "PUT":
                print("REQUEST: ", request.json)
                return TVKatalogueHandler().updateTVkatalogueEpisJson(request.json)#Works, Revised
                 
    #Works. Put with the rest later.
@app.route('/f4doxSOsA7/stat', methods=['GET'])
def tvkstat():
    if request.method == 'GET':
        print("REQUEST: ", request.json)
        return TVKatalogueHandler().getAllTVKataloguesByStatus(request.json)#Works, Revised

#TV Area--------------------------------------------------------------------
    
#Purge Area--------------------------------------------------------------------
#Working on it
@app.route('/PSnDgAg2Mt', methods=['DELETE']) #Works, Revised. 
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
            return MovieKatalogueHandler().deleteAllMovieKataloguesByKID(request.json) #Works, Revised
    
#KID Purge
@app.route('/uafLzIOIdX/prg', methods=['DELETE'])
def tvkprg():
    if request.method == 'DELETE':
            print("REQUEST: ", request.json)
            return TVKatalogueHandler().deleteAllTVKataloguesByKID(request.json) #Works, Revised


    #Maybe Method
# Purge Area--------------------------------------------------------------------
# Recommendation Algorithm Are--------------------------------------------------------------------
#Uses Dataset of User collected Data to calculate popular movies and recommend a 'Cluster' of 10 movies. 
@app.route('/tu15BntHj9/clst/rnd', methods=['GET'])
def movrndclust():
    return rndclust.Cluster().getCluster()

#Selective Algorithm that uses User movie in Katalogue for calculations
@app.route('/<string:movie_id>/clst/slct', methods=['GET'])
def movselectclust(movie_id):
    return slctclust.Cluster().selectiveMovieAlgorithm(movie_id)

@app.route('/<string:KID>/<string:MKUStatus>/krp', methods=['GET'])
def kataloguerandompick(KID,MKUStatus):
    return MovieKatalogueHandler().getRandomMovieFromKatalogue(KID,MKUStatus)

    
# Recommendation Algorithm Are--------------------------------------------------------------------
#Finish purge, finish segmented update, check for any irrelevant code.
#Blob research. How to use in python and how to




if __name__ == '__main__':
    app.run()