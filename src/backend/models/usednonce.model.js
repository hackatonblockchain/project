import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const usednonceSchema = new Schema({
  nonce: {
    type: Number,
    required: true,
    unique: true
  }
})

const UsedNonce = model('UsedNonce', usednonceSchema)

export default UsedNonce