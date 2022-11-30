import pandas as pd
import numpy as np
import requests 
import json 
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from csv import writer


def selective_movie_algorithm():

##Step 1: Read CSV File
	df = pd.read_csv("flask-backend\algorithm\dataset\movie_dataset.csv")
#print df.columns
##Step 2: Select Features

	features = ['keywords','cast','genres','director']
##Step 3: Create a column in DF which combines all selected features
	for feature in features:
		df[feature] = df[feature].fillna('')

	df["combined_features"] = df.apply(combine_features,axis=1)

##Step 4: Create count matrix from this new combined column
	cv = CountVectorizer()

	count_matrix = cv.fit_transform(df["combined_features"])

##Step 5: Compute the Cosine Similarity based on the count_matrix
	cosine_sim = cosine_similarity(count_matrix) 
####################### REQUEST MOVIE TO BE RECOMMENDED FROM #######################
	response = requests.get('https://api.themoviedb.org/3/movie/118340?api_key=468018e64d6cfa119009ede09787dea0&language=en-US')
	data = json.loads(response.text)
	movie_user_likes = data["title"]

##Step 5.5 Title is not found on CSV, writting new title to CSV
# open the file in the write mode
# Import writer class from csv module

# List that we want to add as a new row
##index,budget,genres,homepage,id,keywords,original_language,original_title,overview,popularity,production_companies,production_countries,release_date,revenue,runtime,spoken_languages,status,tagline,title,vote_average,vote_count,cast,crew,director

# genreList =  (data["genres"])
# List = [4803, genreList]
# print(genreList)

# Open our existing CSV file in append mode
# Create a file object for this file
# with open('event.csv', 'a') as f_object:

# 	# Pass this file object to csv.writer()
# 	# and get a writer object
# 	writer_object = writer(f_object)

# 	# Pass the list as an argument into
# 	# the writerow()
# 	writer_object.writerow(List)

# 	# Close the file object
# 	f_object.close()


## Step 6: Get index of this movie from its title
	movie_index = get_index_from_title(movie_user_likes)

	similar_movies =  list(enumerate(cosine_sim[movie_index]))

## Step 7: Get a list of similar movies in descending order of similarity score
	sorted_similar_movies = sorted(similar_movies,key=lambda x:x[1],reverse=True)

## Step 8: Print titles of first 50 movies
	i=0
	for element in sorted_similar_movies:
    ####################### REPLACE WITH UPDATING TO DATABASE #######################
			print(get_title_from_index(element[0]))
			i=i+1
			if i>7:
				break


def get_title_from_index(index):
	return df[df.index == index]["title"].values[0]

def get_index_from_title(title):
	return df[df.title == title]["index"].values[0]

def combine_features(row):
	try:
		return row['keywords'] +" "+row['cast']+" "+row["genres"]+" "+row["director"]
	except:
		print("Error:"), row	