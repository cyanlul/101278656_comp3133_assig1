const { gql } = require('apollo-server-express')

exports.typeDefs = gql`
    type User {
        id: ID!
        username: String!
        firstname: String!
        lastname: String!
        password: String!
        email: String!
        type: String!
    }

    type Listing {
        id: ID!
        listing_id: String!
        listing_title: String!
        description: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        username: String!
    }

    type bookListing {
        id: ID!
        listing_id: String!
        booking_id: String!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        username: String!
    }

    type Query {
        login(username: String! password: String!): User
        getListing: [Listing]
        getListingByName(listing_title: String!): [Listing]
        getListingByCity(city: String!): [Listing]
        getListingByPostal(postal_code: String!): [Listing]
        getBookingByUser(username: String!): [bookListing]
        getListingByAdmin(username: String!): [Listing] 
    }

    type Mutation {
        createUser(username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type: String!): User

        createListing(listing_id: String!
            listing_title: String!
            description: String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!
            username: String!): Listing
        
        createBooking(listing_id: String!
            booking_id: String!
            booking_date: String!
            booking_start: String!
            booking_end: String!
            username: String!): bookListing
    }
`