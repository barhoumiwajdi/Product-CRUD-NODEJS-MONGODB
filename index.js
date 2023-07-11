const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const dotenv = require('dotenv');
const port = process.env.PORT || 4000;
dotenv.config();
const app = express();

require('./Config/Connect')

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json({ limit: "52428800" }));
app.use(bodyParser.urlencoded({ limit: "52428800", extended: true, parameterLimit: 50000 }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', async (req, res) => {
    res.json({ message: 'Welcome to my REST API.' });
});


app.use('/api', require('./Routes/ProductRoutes'))

app.listen(port, console.log('App running on port ' + port)
)