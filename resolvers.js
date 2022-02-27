const User = require('./models/User')
const Listing = require('./models/Listing')
const bookListing = require('./models/bookListing')

exports.resolvers = {
    Query: {
        login: async (parent, args) => {
            return await User.findOne({username: args.username, password: args.password})
        },
        getListing: async (parent, args) => {
            return Listing.find({})
        },
        getListingByName: async (parent, args) => {
            return Listing.find({"listing_title": { "$regex": args.listing_title, "$options": "i"}})
        },
        getListingByCity: async (parent, args) => {
            return Listing.find({"city": args.city})
        },
        getListingByPostal: async (parent, args) => {
            return await Listing.find({"postal_code": { "$regex": args.postal_code, "$options": "i"}})
        },
        getBookingByUser: async (parent, args) => {
            return await bookListing.find({username: args.username})
        },
        getListingByAdmin: async (parent, args) => {
            return await Listing.find({username: args.username})
        }
    },

    Mutation: {
        createUser: async (parent, args) => {
            let newUser = new User({
                username: args.username,
                firstname: args.firstname,
                lastname: args.lastname,
                password: args.password,
                email: args.email,
                type: args.type
            })

            return newUser.save()
        },

        createListing: async (parent, args) => {
            let newListing = new Listing({
                listing_id: args.listing_id,
                listing_title: args.listing_title,
                description: args.description,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
                username: args.username
            })

            return newListing.save()
        },
        
        createBooking: async (parent, args) => {
            let newBooking = new bookListing({
                listing_id: args.listing_id,
                booking_id: args.booking_id,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                username: args.username
            })

            return newBooking.save()
        }
    }
}