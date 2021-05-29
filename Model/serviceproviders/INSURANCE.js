const mongoose = require('mongoose');
module.exports  = mongoose.model("insuranceproviders",  {
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