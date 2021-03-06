var mongoose = require('mongoose');

// reference passport-local-mongoose so passport can use this model for user authentication
var plm = require('passport-local-mongoose');

// define the user schema
var AccountSchema = new mongoose.Schema({
    //username: String
    username: {
        type: String,
        required: 'No username entered'
    }
    /*
    userID: {
        type:Number,
        required: 'No userID entered'
    }
    */
});

// used for configuring options - do we need this???
AccountSchema.plugin(plm);

// make it public
module.exports = mongoose.model('Account', AccountSchema);
