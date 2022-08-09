const router = require('express').Router();
const { House } = require ('../../Models/House')
const Formidable = require('formidable');
const cloudinary = require('cloudinary').v2;
require("dotenv").config();
const mongoose = require('mongoose');

//===================================cloudinary and Mongodb config=================================

const mongoURI= process.env.MONGO_URI;

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
});

//=====================================Mongodb connection==============================


mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}, (error)=>{
    if(error){
        return console.log(error);
    }
    return console.log("Connection to MONGODB was successfull");
})



router.post("/api/house-listing", async (request , response)=> {
    const form = new Formidable.IncomingForm();
    form.parse(request, (errors, fields, files)=> {
        const {
            price,
            province,
            city,
            numOfBedRooms,
            numOfBathRooms,
            IsSaleOrRent,
        } = fields;

        const { houseImage } = files

        cloudinary.uploader.upload(
            houseImage.path,
            { folder: "/houseAgency/houses" },
            async (error, results) => {
              const image_url = results.url;
        const newHouse = new House({
            house_location:{
                province:province,
                city:city,
            },
            house_details:{
                price:price,
                IsSaleOrRent:IsSaleOrRent,
                numOfBedRooms:numOfBedRooms,
                numOfBathRooms:numOfBathRooms,
                house_image: image_url,
            },
        });

        const savedHouse = await newHouse.save();
        return response.status(200).json(savedHouse);
       });

    });
});

module.exports= router;







// console.log("Price", price);
// console.log("Province", province);
// console.log("city", city);
// console.log("BedRoomNumber", numOfBedRooms);
// console.log("Bathroom", numOfBathRooms);
// console.log("SALE OR RENT: ", IsSaleOrRent);
// console.log("houseImage: ", houseImage);