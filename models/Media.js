const mongoose = require('mongoose');


const MediaSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        video: { type: String, required: true },

    },
    {
        timestamps: true
    }
);


module.exports = Media
    = mongoose.model('Media', MediaSchema);