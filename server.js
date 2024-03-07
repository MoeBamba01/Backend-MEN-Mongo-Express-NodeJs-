const express = require("express");
const cors = require('cors');
const app = express();

//-----------------------importation de ma base de données--------------------------
require('dotenv').config({path:'./config/.env'});
require('./config/db');

//------------------------importation de mes routes----------------------------------
const userRouter = require("./routes/userRoutes")
app.use(cors());
app.use(express.json());
app.use('/api', userRouter);

//---------------------------------------my server---------------------------------
const port = 7777
app.listen(port, function() {
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s',
      port);
});