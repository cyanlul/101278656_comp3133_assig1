const mongoose = require('mongoose');

const bookListingSchema = new mongoose.Schema({
    listing_id: {
        type: String,
        trim: true
    },
    booking_id: {
        type: String,
        trim: true
    },
    booking_date: {
        type: String
    },
    booking_start: {
        type: String
    },
    booking_end: {
        type: String
    },
    username: {
        type: String,
        trim: true
    }
})

const bookListing = mongoose.model("bookListing", bookListingSchema);
module.exports = bookListing;