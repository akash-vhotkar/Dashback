const express = require('express');
const router = express.Router();
const providercontroller =  require('../Controllers/providers');

router.get('/datacard',providercontroller().getdatacardproviders );
router.get('/mobilerecharge',  providercontroller().getmobilerechargeproviders);
router.get('/water', providercontroller().getwaterprividers);
router.get('/insurance', providercontroller().getinsuranceproviders);
router.get('/dth', providercontroller().getdthproviders);
router.get('/gas', providercontroller().getgasproviders);
router.get('/billpayment', providercontroller().getbilpaymentproviders)

module.exports = router;