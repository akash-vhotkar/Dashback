const dthproviderdb = require('../Model/serviceproviders/DTH');
const electricityproviderdb = require('../Model/serviceproviders/ELECTRICITY');
const insuranceproviderdb = require('../Model/serviceproviders/INSURANCE')
const waterproviderdb = require('../Model/serviceproviders/WATER');
const biillpayproviderdb = require('../Model/serviceproviders/BILLPAY');
const gasproviderdb = require('../Model/serviceproviders/GAS');
const mobilerechargeproviderdb = require('../Model/serviceproviders/MOBILE');
const datacardproviderdb =  require('../Model/serviceproviders/DATACARD');
const getprovider = ()=>{
    return {
        async getdatacardproviders(req,res){
            try{
                const datacardproviders = await datacardproviderdb.find();
                res.status(200).json({err: 0 , data : datacardproviders})

            }catch(err){
                res.status(400).json({err: 1, message:"Internal server error"})
            }
        },
        async getelecticityproviders(req,res){
            try{
                const electricityproviders = await electricityproviderdb.find();
                res.status(200).json({err: 0, data:  electricityproviders})
            }
            catch(err){
                if(err){
                    res.status(400).json({err: 1, message:"Internal server error"});
                }
            }
        },
        async  getdthproviders(req,res){
            try{
                const dthproviders = await dthproviderdb.find();
                res.status(200).json({err:0 , data : dthproviderdb});

            }catch(err){
                if(err) {
                    res.status(400).json({err:1, message:"Internal server error"})
                }
            }
        },
        async getinsuranceproviders(req,res){
            try{
                const insuranceproviders = await  insuranceproviderdb.find();
                res.status(200).json({err : 0  , data:  insuranceproviders})
                
            }catch(err){
                if(err) res.status(400).json({err:1, message:"Internal server error"})
            }
        },
        async  getmobilerechargeproviders(req,res){
            try{
                const mobilerechargeproviders =  await mobilerechargeproviderdb.find();
                res.status(200).json({err:0, data:mobilerechargeproviders})

            }catch(err){
                if(err) res.status(400).json({err: 1,message:"Internal server error"})
            }
        },
        async getwaterprividers(req,res){
            try{
                const waterproviders = await  waterproviderdb.find();
                res.status(200).json({err: 0 , data: waterproviders})

            }catch(err){
                if(err){
                    res.status(400).json({err: 1, message:"Internal server error"})
                }
            }
        },
        async getgasproviders(req,res){
            try{
                const gasproviders = await gasproviderdb.find();
                res.status(200).json({err:0 ,data: gasproviders})
                
            }catch(err){
                if(err) res.status(400).json({err: 1, message:"Internal server error"});
            }
        },
        async getbilpaymentproviders(req,res){
            try{
                const  billpaymentproviders = await  biillpayproviderdb.find();
            res.status(200).json({err: 1, data:  billpaymentproviders});

            }
            catch(err){
                if(err) {
                    console.log(err);
                    res.status(400).json({err: 1 ,message: "Internal server error"})
                }
            }
        } 

    }
}
module.exports  = getprovider;