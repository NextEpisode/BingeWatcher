import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from csv import writer
from flask import jsonify

class selecthelper():

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