from torch.utils.data.dataset import Dataset
import pandas as pd
import torch
import numpy as np

# Note: This isn't 'good' practice, in a MLops sense but we'll roll with this since the data is already loaded in memory.
class Loader(Dataset):
    def __init__(self):
        ratings_df = pd.read_csv(r'C:\Users\erick\VSCode\forum-system\flask-backend\algorithm\dataset\tvratings\tvratings.csv', encoding = "ISO-8859-1")
        self.ratings = ratings_df.copy()
        
        # Extract all user IDs and movie IDs
        users = ratings_df.tconst.unique()
        shows = ratings_df.numVotes.unique()
        
        #--- Producing new continuous IDs for users and movies ---
        
        # Unique values : index
        self.userid2idx = {o:i for i,o in enumerate(users)}
        self.tvid2idx = {o:i for i,o in enumerate(shows)}
        
        # Obtained continuous ID for users and movies
        self.idx2userid = {i:o for o,i in self.userid2idx.items()}
        self.idx2tvid = {i:o for o,i in self.tvid2idx.items()}
        
        # return the id from the indexed values as noted in the lambda function down below.
        self.ratings.tconst = ratings_df.tconst.apply(lambda x: self.tvid2idx[x])
        self.ratings.tconst = ratings_df.tconst.apply(lambda x: self.userid2idx[x])
        
        
        self.x = self.ratings.drop(['averageRating', 'numVotes', 'primaryTitle', 'genre'], axis=1).values
        self.y = self.ratings['averageRating'].values
        #self.x=np.vstack(self.x).astype(np.float)
        #self.y=np.vstack(self.y).astype(np.float)
        #self.x = torch.tensor(torch.from_numpy(self.x))
        #self.y = torch.tensor(torch.from_numpy(self.y)) # Transforms the data to tensors (ready for torch models.)
        self.x = torch.tensor(self.x)
        self.y = torch.tensor(self.y) # Transforms the data to tensors (ready for torch models.)

    def __getitem__(self, index):
        return (self.x[index], self.y[index])

    def __len__(self):
        return len(self.ratings)