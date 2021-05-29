const mongoose = require('mongoose');
module.exports  = mongoose.model("datacardproviders",  {
    name:{
        type:String,
        reuired: true
    },
    ProviderID:{
        type:String,
        required: true
    },
    providerimage: {
        type:Array,
        required: false
    }
    
})