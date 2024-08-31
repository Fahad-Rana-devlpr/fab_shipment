const Router = require('express');
const shipment_controller = require('../controllers/shipment_controller')
const router = Router();

router.post('', shipment_controller);

module.exports = router;