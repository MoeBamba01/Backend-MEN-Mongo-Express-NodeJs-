const mongoose = require("mongoose");

//--------------------------connection à la base de données---------------------------------
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() =>console.log("successful connection"))
.catch((error) => console.log(error)) 