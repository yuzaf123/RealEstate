const mongoose = require("mongoose");

const HouseSchema = mongoose.Schema({

  house_location: {
    province: { type: String, required: true },
    city: { type: String, required: true },
  },
  house_properties: {
    
    price: { type: Number, required: true },
    numOfBedRooms: { type: Number, required: true },
    numOfBathRooms: { type: Number, required: true },
    isSaleOrRent: { type: String, required: true },
    houseImage: { type: String, required: true},
  },
});

const House = mongoose.model("House", HouseSchema);

module.exports = { House };




















































// const mongoose = require('mongoose')

// const HouseListSchema = new mongoose.Schema({
//     price : {
//         type : Number,
//         required : true
//     },
//     province : {
//         type : String,
//         required : true
//     },
//     city:{
//         type : String,
//         required : true
//     },
//     numOfBedRooms: {
//         type : Number,
//         required : true
//     },
//     numOfBathRooms: {
//         type : Number,
//         required : true
//     },
//     IsSaleOrRent:{
//         type : String,
//         required : true
//     },
// })

// const HouseList = mongoose.model('HouseList',HouseListSchema)

// module.exports = HouseList
























































// const mongoose = require('mongoose')

// const PhoneBookSchema = new mongoose.Schema({
//     name : {
//         type : String,
//         required : true
//     },
//     phone : {
//         type : Number,
//         required : true
//     }
// })

// const PhoneBook = mongoose.model('PhoneBook',PhoneBookSchema)

// module.exports = PhoneBook















// // const mongoose = require("mongoose");
// // const HouseSchema = mongoose.Schema({

// //     house_location: {
// //         province: { type: String, required: true },
// //         city: { type: String, required: true },
// //     },
// //     house_details: {
// //         price: { type: Number, required: true },
// //         IsSaleOrRent: { type: String, required: true },
// //         numOfBedRooms: { type: Number, required: true },
// //         numOfBathRooms: {type: Number, required: true},
// //         houseImage: {type: String, required: true},
// //     },
// // });

// // const House = mongoose.model("House", HouseSchema);

// // module.exports = {House};