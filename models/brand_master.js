const mongoose = require('mongoose')
const Schema = mongoose.Schema


const brandSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    }
    ,
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }]
    ,
    organisationId: {
        type: Schema.Types.ObjectId,
        ref: 'Organisation'
    }


})

const Brand = mongoose.model('Brand', brandSchema)

module.exports = Brand