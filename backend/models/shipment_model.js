const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  senderName: {
    type: String,
    required: true
  },
  senderAddress: {
    type: String,
    required: true
  },
  recipientName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  postalCode: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  },
  trackingNumber: {
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