const axios = require('axios');
const mobilerechargedb = require('../Model/mobilerecharge');
const mobilerechargecontroller =  ()=>{
    return {
        async  recharge(req,res ,ClientID ,ClientKey,UserTrackid,mobilenumber,amount,servicetype,serviceprovider){
            // http://www.domain.com/rechargeApi/Recharge?ClientID=***&ClientKey=***&UserTrackid=***&mobilenumber=96******25&amount=10&servicetype=**&serviceprovider=****
            try{
              const response=  await  axios.post(`http://www.domain.com/rechargeApi/Recharge?ClientID=${ClientID}&ClientKey=${ClientKey}&Us
                erTrackid=${UserTrackid}&mobilenumber=${mobilenumber}&amount=${amount}&servicetype=${servicetype}&servic
                eprovider=${serviceprovider}`)
                if(response){
                    const newmobilerecharge = mobilerechargedb.create()
                    res.status(200).json({err: 0, message:"Recharge successfully", data: newmobilerecharge});
                }
                else{
                    res.status(400).json({err: 1,message:"Internal server error"})
                }

            }catch(err){
                if(err) {
                    console.log(err);
                    res.status(400).json({err: 1, message:"Internal server error"})
                }
            }

        },
        async  getbalance(req,res ,)

    }
}
module.exports  = mobilerechargecontroller;