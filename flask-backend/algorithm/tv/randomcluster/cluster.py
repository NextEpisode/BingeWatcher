from torch.utils.data.dataset import Dataset 
from torch.utils.data import DataLoader # package that helps transform your data to machine learning readiness
from sklearn.cluster import KMeans
import pandas as pd
import numpy as np
from flask import jsonify
import torch
from algorithm.tv.randomcluster import loader
from algorithm.tv.randomcluster import factorizer

class Cluster():

    def build_clusterlist_dict(self, row):
        result = {}
        result['Showname'] = row[0]
        return result

    def getCluster(self):
        ratings_df = pd.read_csv(r'C:\Users\erick\VSCode\forum-system\flask-backend\algorithm\dataset\tvratings\tvratings.csv', encoding = "ISO-8859-1")

        #Old Dataset
        #movies_df = pd.read_csv(r'C:\Users\erick\VSCode\forum-system\flask-backend\algorithm\ml-latest-small\movies.csv')
        #ratings_df = pd.read_csv(r'C:\Users\erick\VSCode\forum-system\flask-backend\algorithm\ml-latest-small\ratings.csv')
        #movies_df = pd.read_csv('..\algorithm\ml-latest-small\movies.csv')
        #ratings_df = pd.read_csv('..\algorithm\ml-latest-small\ratings.csv')
        series_names = ratings_df.set_index('tconst')['SeriesName'].to_dict()
        n_users = len(ratings_df.tconst.unique())
        n_items = len(ratings_df.numVotes.unique())

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
                if cuda:
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

        trained_tvshow_embeddings = model.item_factors.weight.data.cpu().numpy()
        len(trained_tvshow_embeddings) # unique movie factor weights


        # Fit the clusters based on the movie weights
        kmeans = KMeans(n_clusters=10, random_state=0).fit(trained_tvshow_embeddings)


        for cluster in range(1):
            print("Cluster #{}".format(cluster))
        tvs = []
        for tvidx in np.where(kmeans.labels_ == cluster)[0]:
            tvid = train_set.idx2tvid[tvidx]
            rat_count = ratings_df.loc[ratings_df['tconst']==tvid].count()[0]
            tvs.append((series_names[tvid], rat_count))
        #for mov in sorted(movs, key=lambda tup: tup[1], reverse=True)[:10]:
            #print("\t", mov[0])

        tvlist = sorted(tvs, key=lambda tup: tup[1], reverse=True)[:10]
        result_list = []
        for row in tvlist:
            result = self.build_clusterlist_dict(row)
            result_list.append(result)
        return jsonify(cluster=result_list)

        

