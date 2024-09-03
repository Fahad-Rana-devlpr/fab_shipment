const Shipment = require('../models/shipment_model')
const create_shipment = async(req,res) => {
    try {
        const new_shipment = new Shipment(req.body);
        const data = await new_shipment.save();
        return res.json({message:'shipment created successfully.', data: data, status: true})
    } catch (error) {
        return res.json({message: error.message, status: false})
    }
}
const get_shipment = async(req,res) => {
    try {
        const {id} = req.params;
        const data = await Shipment.findOne({_id: id});
        return res.json({message:'shipment data fetched successfully.', data: data, status: true})
    } catch (error) {
        return res.json({message: error.message, status: false})
    }
}

module.exports = {create_shipment, get_shipment}