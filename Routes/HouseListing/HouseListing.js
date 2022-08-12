const router = require("express").Router();
const mongoose = require("mongoose");
const Formidable = require("formidable");
const cloudinary = require("cloudinary").v2;
const House = require("../../Models/House");
require('dotenv').config();

//Initialize MongoDB connection and Cloudinary
const MongoURI = process.env.MONGO_URI;
mongoose.connect(
  MongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) {
      return console.log(error);
    }
    return console.log("Connection to MongoDB was Successful");
  }
);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

//ROUTE FOR USER TO COME SELL OR RENT THEIR HOUSES

router.post("/house-upload", async (request, response) => {
  const form = new Formidable.IncomingForm();
  form.parse(request, (error, fields, files) => {
    const {
      price,
      province,
      city,
      numOfBedRooms,
      numOfBathRooms,
      isSaleOrRent,
    } = fields;

    const { houseImage, } = files;

    cloudinary.uploader.upload(
      houseImage.path,
      { folder: "/houseAgency/houses" },
      async (error, results) => {
        console.log(results);
        const image_url = results.url;

        const newHouse = new House({
          house_location: {
            province: province,
            city: city,
          },
          house_properties: {
            price: price,
            numOfBedRooms: numOfBedRooms,
            numOfBathRooms: numOfBathRooms,
            isSaleOrRent: isSaleOrRent,
            houseImage: image_url,
          },
        });
        const savedHouse= await newHouse.save();
        return response.status(200).json(savedHouse);
      }
    );
  });
});

module.exports = router;
// console.log("Name: ", name);
// console.log("Surname: ", surname);
// console.log("IdNUmebr: ", idNumber);
// console.log("PhoneNumber", phoneNumber);
// console.log("Emaiil: ", email);
// console.log("Province", province);
// console.log("Street", street);
// console.log("SALE OR RENT: ", sale_or_rent);
// console.log("LAND SIZE", land_size);
// console.log("BedRoomNUmber", bedroomNumber);
// console.log("Garages", garages);
// console.log("Pool", pool);
// console.log("Bathroom", bathroomNumber);
// console.log("Pet Friendly", petFriendly);
// console.log("House IMage", houseImage.path);