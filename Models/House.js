const mongoose = require("mongoose");
const HouseSchema = mongoose.Schema({

    house_location: {
        province: { type: String, required: true },
        city: { type: String, required: true },
    },
    house_details: {
        price: { type: Number, required: true },
        IsSaleOrRent: { type: String, required: true },
        numOfBedRooms: { type: String, required: true },
        numOfBathRooms: {type: String, required: true},
        houseImage: {type: String, required: true},
    },
});

const House = mongoose.model("House", HouseSchema);

module.exports = {House};