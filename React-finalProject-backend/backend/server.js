const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const eventsRouter = require('./routes/EventRoute'); 

const app = express();
const port = process.env.PORT || 5000;
const connectionString = 'mongodb+srv://myuser:mypwd@cluster0.3xdtn2w.mongodb.net/eventsDB';

app.use(cors());
app.use(express.json());

mongoose.connect(connectionString, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Database connection established successfully');
});


app.use(eventsRouter); 

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
