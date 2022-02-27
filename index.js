const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const TypeDefs = require('./schema')
const Resolvers = require('./resolvers')

const { ApolloServer } = require('apollo-server-express')


mongoose.connect('mongodb+srv://dilan:admin@comp3123.e5acu.mongodb.net/101278656_comp3133_assig1?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

const server = new ApolloServer({
    typeDefs: TypeDefs.typeDefs,
    resolvers: Resolvers.resolvers
})

const app = express();
app.use(bodyParser.json());
app.use('*', cors());

server.applyMiddleware({app})

app.listen(8081, () => { console.log('Server is running...') });