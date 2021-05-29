const express = require('express');
const router = express.Router();
const rechargecontroller =  require('../Controllers/mobilerecharge');
router.get('/servicetype', rechargecontroller().recharge(req.body.ClientID ,req.body.ClientKey,req.body.UserTrackid,req.body.mobilenumber,req.body.amount,req.body.servicetype,req.body.serviceprovider) )
module.exports = router;