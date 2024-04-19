const fs = require('fs');
const express = require('express');
const { ApolloServer, UserInputError } = require('apollo-server-express');
const { GraphQLScalarType } = require('graphql');
// const { Kind } = require('graphql/language');
const { MongoClient } = require('mongodb');

let db;//Variable that points to the real DB.


async function addLike(_, args){
    console.log(args.track);
    console.log(args.id);
    const result = await db.collection('like').insertOne({id: args.id,track: args.track,artist: args.artist,date:args.date});
    return true;
}
async function getLikes(_, args) {
    //根据日期查询
    const likes = await db.collection('like').find({date: args.date}).toArray();
    return likes;
}
async function deleteLike(_, args){
    const result = await db.collection('like').deleteMany({track: args.track, artist: args.artist, date:args.date});
    return true;
}


const resolvers = {
    Query: {
        getLikes,
    },
    Mutation: {
        addLike,
        deleteLike
    },
  };

const app = express();
app.use(express.static('public'));


const server = new ApolloServer({
    typeDefs: fs.readFileSync('./server/musicschema.graphql', 'utf-8'),
    resolvers,
    formatError: error => {
      console.log(error);
      return error;
    },
  });
server.applyMiddleware({ app, path: '/graphql' });

async function connectToDb() {
    const url = 'mongodb://localhost/music';
    const client = new MongoClient(url, { useNewUrlParser: true });
    await client.connect();
    console.log('Connected to MongoDB at', url);
    db = client.db();
}


(async function () {
    console.log('Backend start');
    try {
        await connectToDb();
        app.listen(4000, function () {
           console.log('graphql started on port 4000');
        });
      } catch (err) {
        console.log('ERROR:', err);
      }
  })();