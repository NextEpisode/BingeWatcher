from torch.utils.data.dataset import Dataset 
from torch.utils.data import DataLoader # package that helps transform your data to machine learning readiness
from sklearn.cluster import KMeans
import pandas as pd
import numpy as np
from flask import jsonify
import torch
from algorithm.movie.randomcluster import loader
from algorithm.movie.randomcluster import factorizer

class Cluster():

    def build_clusterlist_dict(self, row):
        result = {}
        result['Moviename'] = row[0]
        return result

    def getCluster(self):
        movies_df = pd.read_csv(r'flask-backend\algorithm\dataset\ml-latest-small\movies.csv')
        ratings_df = pd.read_csv(r'flask-backend\algorithm\dataset\ml-latest-small\csv_0.csv')
        #movies_df = pd.read_csv(r'flask-backend\algorithm\dataset\ml-latest-small\movies.csv')
        #ratings_df = pd.read_csv(r'flask-backend\algorithm\dataset\ml-latest-small\ratings.csv')
        #Acquiring and attaching the dataset to Panda Dataframes.
        movie_names = movies_df.set_index('movieId')['title'].to_dict()
        #Setting movienames to the modieID in a separate dictionary.
        n_users = len(ratings_df.userId.unique())
        n_items = len(ratings_df.movieId.unique())
        
        #Creating Model
        model = factorizer.MatrixFactorization(n_users, n_items, n_factors=8)
        #Matrix Factorization implicitly finds relationships in the dataset itself, and what it does is that it 
        #Allows us to have a subset of that matrix and use that to work, instead of the entire matrix

        num_epochs = 128
        cuda = torch.cuda.is_available()

        if cuda:
            model = model.cuda()

        # MSE loss
        #Mean Squandered Error
        loss_fn = torch.nn.MSELoss()

        # ADAM optimizier
        #Optimization algorithm used in Pytorch
        optimizer = torch.optim.Adam(model.parameters(), lr=1e-3)

        #Data is loaded into tensors
        #This makes it so that the data is readable in pytorch format
        train_set = loader.Loader()
        train_loader = DataLoader(train_set, 128, shuffle=True) 

        #Loop used to train the data using pytorch methods.
        #X is MovieID and UserID
        #Y is Ratings
        for it in range(num_epochs):
            losses = []
            for x, y in train_loader:
                if cuda:
                    x, y = x.cuda(), y.cuda()
                    optimizer.zero_grad()
                    outputs = model(x)
                    loss = loss_fn(outputs.squeeze(), y.type(torch.float32))
                    losses.append(loss.item())
                    loss.backward()
                    optimizer.step()

        # By training the model, we will have tuned latent factors for movies and users.

        trained_movie_embeddings = model.item_factors.weight.data.cpu().numpy()
        len(trained_movie_embeddings) # unique movie factor weights

        # Fit the clusters based on the movie weights
        kmeans = KMeans(n_clusters=10, random_state=0).fit(trained_movie_embeddings)

        for cluster in range(1):
            print("Cluster #{}".format(cluster))
        movs = []
        for movidx in np.where(kmeans.labels_ == cluster)[0]:
            movid = train_set.idx2movieid[movidx]
            rat_count = ratings_df.loc[ratings_df['movieId']==movid].count()[0]
            movs.append((movie_names[movid], rat_count))

        movlist = sorted(movs, key=lambda tup: tup[1], reverse=True)[:10]
        result_list = []
        for row in movlist:
            result = self.build_clusterlist_dict(row)
            result_list.append(result)
        return jsonify(cluster=result_list)

        

