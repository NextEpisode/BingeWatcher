import pandas as pd
import numpy as np
import requests 
import json 
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from csv import writer
from flask import jsonify

class Cluster():

    def build_clusterlist_dict(self, row):
        result = {}
        result['Moviename'] = row[0]
        return result

    def selectiveMovieAlgorithm(self):
        df = pd.read_csv(r'flask-backend\algorithm\dataset\movie_dataset.csv')
        ##Step 1: Read CSV File
		#print df.columns
    	##Step 2: Select Features
        features = ['keywords','cast','genres','director']
        for feature in features:
            df[feature] = df[feature].fillna('')
   
        df["combined_features"] = df.apply(self.combine_features,axis=1)
        ##Step 4: Create count matrix from this new combined column
        cv = CountVectorizer()
        count_matrix = cv.fit_transform(df["combined_features"])
        ##Step 5: Compute the Cosine Similarity based on the count_matrix
        cosine_sim = cosine_similarity(count_matrix) 
        response = requests.get('https://api.themoviedb.org/3/movie/118340?api_key=468018e64d6cfa119009ede09787dea0&language=en-US')
        data = json.loads(response.text)
        movie_user_likes = data["title"]
        
        ## Step 6: Get index of this movie from its title
        movie_index = self.get_index_from_title(movie_user_likes)
        similar_movies =  list(enumerate(cosine_sim[movie_index]))
        ## Step 7: Get a list of similar movies in descending order of similarity score
        sorted_similar_movies = sorted(similar_movies,key=lambda x:x[1],reverse=True)

        ## Step 8: Print titles of first 50 movies
        i=0
        result_list = []
        for element in sorted_similar_movies:
            result = self.build_clusterlist_dict(element[0])
            result_list.append(result)
            i=i+1
            if i>7:
                break
        return jsonify(cluster=result_list)

    def get_title_from_index(index):
        df = pd.read_csv(r'flask-backend\algorithm\dataset\movie_dataset.csv')
        return df[df.index == index]["title"].values[0]
    
    def get_index_from_title(title):
        df = pd.read_csv(r'flask-backend\algorithm\dataset\movie_dataset.csv')
        return df[df.title == title]["index"].values[0]

    def combine_features(row):
        try:
            return row['keywords'] +" "+row['cast']+" "+row["genres"]+" "+row["director"]
        except:
            print("Error:"), row

        

    
        
        