const mongoose = require("mongoose")

const hotelOwnerSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },   // Referencing the user as the owner
    hotelName: { type: String, required: true },
    hotelDescription: { type: String, required: true },
    keyPoints: [{ type: Map, of: String }],
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    ownerContact: { type: String, required: true },
    bookingContact: { type: String, required: true },
    numberOfRooms: { type: Number, required: true },
    additionEmail: { type: String },
    hotelAddress: { type: String, required: true },
    pincode: { type: Number, required: true },
    // diningHall: { type: String, required: true },
    image: [{ type: String }],
})

module.exports = mongoose.model("HotelOwner", hotelOwnerSchema)