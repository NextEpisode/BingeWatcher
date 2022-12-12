import pandas as pd
import numpy as np
import requests 
import json 
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from csv import writer
from flask import jsonify
from handler.MovieKatalogueHandler import MovieKatalogueHandler
from algorithm.movie.selectivecluster.selectivehelper import selecthelper as helper
import csv

class Cluster():

    def build_clusterlist_dict(self, row):
        result = {}
        result['Moviename'] = row
        return result


        

    def selectiveMovieAlgorithm(self, movie_id):
        df = pd.read_csv(r'flask-backend\algorithm\dataset\movie_dataset.csv')
        ##Step 1: Read CSV File
		#print df.columns
    	##Step 2: Select Features
        features = ['keywords','cast','genres','director']
        for feature in features:
            df[feature] = df[feature].fillna('')
   
        df["combined_features"] = df.apply(helper.combine_features,axis=1)
        ##Step 4: Create count matrix from this new combined column
        cv = CountVectorizer()
        count_matrix = cv.fit_transform(df["combined_features"])
        ##Step 5: Compute the Cosine Similarity based on the count_matrix
        cosine_sim = cosine_similarity(count_matrix) 
        movieid = movie_id
        first = 'https://api.themoviedb.org/3/movie/'
        second = '?api_key=468018e64d6cfa119009ede09787dea0&language=en-US'
        response = requests.get(first+str(movieid)+second)
        data = json.loads(response.text)
        movie_user_likes = data["title"]
        f=open(r'flask-backend\algorithm\dataset\movie_dataset.csv',"r")
        reader=csv.reader(f)
        movieToFind = movie_user_likes
        for row in reader:
            if movieToFind in row:
                ## Step 6: Get index of this movie from its title
                movie_index = helper.get_index_from_title(movie_user_likes)
                similar_movies =  list(enumerate(cosine_sim[movie_index]))
                ## Step 7: Get a list of similar movies in descending order of similarity score
                sorted_similar_movies = sorted(similar_movies,key=lambda x:x[1],reverse=True)
                if len(sorted_similar_movies) < 0:
                    return []
                ## Step 8: Print titles of first 5 movies
                i=0            
                result_list = []
                for element in sorted_similar_movies:
                    mov = helper.get_title_from_index(element[0])
                    result = self.build_clusterlist_dict(str(mov))
                    result_list.append(result)
                    i=i+1
                    if i>5:
                        break
                    f.close()
                return jsonify(cluster=result_list)
        f.close()
        return []
    


        

    
        
        
