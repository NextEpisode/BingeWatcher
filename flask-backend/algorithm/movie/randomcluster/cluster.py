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
        #movies_df = pd.read_csv(r'C:\Users\erick\VSCode\forum-system\flask-backend\algorithm\dataset\movieratings.csv')
        #ratings_df = pd.read_csv(r'C:\Users\erick\VSCode\forum-system\flask-backend\algorithm\dataset\movieratings.csv')

        #Old Dataset
        movies_df = pd.read_csv(r'C:\Users\erick\VSCode\forum-system\flask-backend\algorithm\dataset\ml-latest-small\movies.csv')
        ratings_df = pd.read_csv(r'C:\Users\erick\VSCode\forum-system\flask-backend\algorithm\dataset\ml-latest-small\ratings.csv')
        #movies_df = pd.read_csv('..\algorithm\ml-latest-small\movies.csv')
        #ratings_df = pd.read_csv('..\algorithm\ml-latest-small\ratings.csv')
        movie_names = movies_df.set_index('movieId')['title'].to_dict()
        n_users = len(ratings_df.userId.unique())
        n_items = len(ratings_df.movieId.unique())

        #Creating Model
        model = factorizer.MatrixFactorization(n_users, n_items, n_factors=8)

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

        # Train data
        train_set = loader.Loader()
        train_loader = DataLoader(train_set, 128, shuffle=True) 

        #Loop used to train the data using pytorch methods.
        for it in range(num_epochs):
            losses = []
            for x, y in train_loader:
                #if cuda:
                x, y = x.cuda(), y.cuda()
                optimizer.zero_grad()
                outputs = model(x)
                loss = loss_fn(outputs.squeeze(), y.type(torch.float32))
                losses.append(loss.item())
                loss.backward()
                optimizer.step()
            #print("iter #{}".format(it), "Loss:", sum(losses) / len(losses))


        # By training the model, we will have tuned latent factors for movies and users.
        #Research wtf this means exactly.

        trained_movie_embeddings = model.item_factors.weight.data.cpu().numpy()
        len(trained_movie_embeddings) # unique movie factor weights


        # Fit the clusters based on the movie weights
        kmeans = KMeans(n_clusters=10, random_state=0).fit(trained_movie_embeddings)


        '''It can be seen here that the movies that are in the same cluster tend to have
        similar genres. Also note that the algorithm is unfamiliar with the movie name
        and only obtained the relationships by looking at the numbers representing how
        users have responded to the movie selections.'''
        for cluster in range(1):
            print("Cluster #{}".format(cluster))
        movs = []
        for movidx in np.where(kmeans.labels_ == cluster)[0]:
            movid = train_set.idx2movieid[movidx]
            rat_count = ratings_df.loc[ratings_df['movieId']==movid].count()[0]
            movs.append((movie_names[movid], rat_count))
        #for mov in sorted(movs, key=lambda tup: tup[1], reverse=True)[:10]:
            #print("\t", mov[0])

        movlist = sorted(movs, key=lambda tup: tup[1], reverse=True)[:10]
        result_list = []
        for row in movlist:
            result = self.build_clusterlist_dict(row)
            result_list.append(result)
        return jsonify(cluster=result_list)

        

