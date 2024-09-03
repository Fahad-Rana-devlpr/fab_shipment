const Shipment = require('../models/shipment_model');
const { Shippo } = require('shippo')
const create_shipment = async (req, res) => {
    const shippo = new Shippo({ apiKeyHeader: 'shippo_test_c608bd5c9ef3525c2328ec600948ebf02f9384f1' });
    const { senderName, senderStreet, senderCity, senderState, senderZip, senderCountry, senderEmail, senderPhone, reciverName, reciverStreet, reciverCity, reciverState, reciverZip, reciverCountry, parcelLength, parcelWidth, parcelHeight, parcelWeight } = req.body;
    const addressFrom = {
        name: senderName,
        street1: senderStreet,
        city: senderCity,
        state: senderState,
        zip: senderZip,
        country: senderCountry,
        email: senderEmail,
        phone: senderPhone,
    };

    const addressTo = {
        name: reciverName,
        street1: reciverStreet,
        city: reciverCity,
        state: reciverState,
        zip: reciverZip,
        country: reciverCountry,
    };

    const parcel = {
        length: String(parcelLength),
        width: String(parcelWidth),
        height: String(parcelHeight),
        distanceUnit: 'in',
        weight: String(parcelWeight),
        massUnit: 'kg'
    };
    try {
        const shipment = await shippo.shipments.create({
            addressFrom: addressFrom,
            addressTo: addressTo,
            parcels: [parcel],
            async: false
        });
        const rate = shipment.rates[0];
        const transaction = await shippo.transactions.create({
            rate: rate?.objectId,
            labelFileType: 'PDF',
            async: false
        });
        if(!transaction?.labelUrl){
            return res.json({message:'There is some error while creating label for these addresses.', status:false})
        }
        const data = await Shipment.create({...req.body, labelUrl: transaction.labelUrl})
        return res.json({ message: "label created successfully." , status: true, data: data._id })
    } catch (error) {
        console.log(error)
        return res.json({ message: error.message, status: false })
    }

}



const get_shipment = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Shipment.findOne({ _id: id });
        return res.json({ message: 'shipment data fetched successfully.', data: data, status: true })
    } catch (error) {
        return res.json({ message: error.message, status: false })
    }
}

module.exports = { create_shipment, get_shipment }