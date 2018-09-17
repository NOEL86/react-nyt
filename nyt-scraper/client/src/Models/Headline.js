//Headline Model 1
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var headlineSchema = new Schema({

    title: {
        type: String,
        required: true,
        unique: true
    },

    summary: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },

    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }],

    saved: {
        type: Boolean,
        default: false
    }
});

var Headline = mongoose.model("Headline", headlineSchema);

module.exports = Headline;