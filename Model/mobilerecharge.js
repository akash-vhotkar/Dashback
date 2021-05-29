const mongoose = require('mongoose');
module.exports = mongoose.model("mobilerecharge", {
    ErrorCode:{
        type:String,
        required: true

    },
ErrorMessage:{
    type:String,
    required: true

},
UserTrackid:{
    type: String,
    required: true

},
StatusCode:String,
Response:{
Message:String,
TransactionID:String,
OperatorRefID:String,
Status:String,
AgentBalance:String
},
Time:{
    default: new Date()
}
})