const Router = require('express');
const {create_shipment, get_shipment} = require('../controllers/shipment_controller')
const router = Router();

router.post('', create_shipment);
router.get('/:id', get_shipment);

module.exports = router;