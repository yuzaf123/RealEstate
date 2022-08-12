const express = require ('express');
const cors = require ('cors');
const app = express();
const path = require ("path");


//==========================Middleware===========================================

app.use(cors());




//==================================Route constants===============================

const houseListingRoute = require('./Routes/HouseListing/HouseListing')

//==================================Routes==============================================

app.use(houseListingRoute);


  

//==================================Server entry====================================

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
