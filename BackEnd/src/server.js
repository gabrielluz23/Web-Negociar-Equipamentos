const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');
const app = express();

mongoose.connect('mongodb+srv://tody:12345@oministack-lbfxv.mongodb.net/semana01?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(cors({}))
app.use(express.json());
app.use(routes);
app.use('/files',express.static(path.resolve(__dirname,'..','uploads')))
app.listen(3333);