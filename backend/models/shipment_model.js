const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  senderName: {
    type: String,
    required: true
  },
  senderStreet: {
    type: String,
    required: true
  },
  senderCity: {
    type: String,
    required: true
  },
  senderState: {
    type: String,
    required: true
  },
  senderZip: {
    type: String,
    required: true
  },
  senderCountry: {
    type: String,
    required: true
  },
  senderEmail: {
    type: String,
    required: true
  },
  senderPhone: {
    type: String,
    required: true
  },
  reciverName: {
    type: String,
    required: true
  },
  reciverStreet: {
    type: String,
    required: true
  },
  reciverCity: {
    type: String,
    required: true
  },
  reciverState: {
    type: String,
    required: true
  },
  reciverZip: {
    type: String,
    required: true
  },
  reciverCountry: {
    type: String,
    required: true
  },
  parcelLength: {
    type: String,
    required: true
  },
  parcelWidth: {
    type: String,
    required: true
  },
  parcelHeight: {
    type: String,
    required: true
  },
  parcelWeight: {
    type: String,
    required: true
  },
  labelUrl: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Shipment = mongoose.model('shipments', shipmentSchema);

module.exports = Shipment;