const express = require ('express');
const app = express();
app.use(express.json());
const cors=require('cors');
app.use(cors());
app.use('/user',require('./routes/userRoutes'))
const port = 8000;
require('./helpers/dbConnect')
app.listen(port,()=>console.log(`server is running on ${port}`));