const Shipment = require('../models/shipment_model')
const create_shipment = async(req,res) => {
    try {
        const new_shipment = new Shipment(req.body);
        await new_shipment.save();
        return res.json({message:'shipment created successfully.', status: true})
    } catch (error) {
        console.log(error)
        return res.json({message: error.message, status: false})
    }
}

module.exports = create_shipment