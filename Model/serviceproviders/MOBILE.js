const mongoose = require('mongoose');
module.exports  = mongoose.model("mobileproviders",  {
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