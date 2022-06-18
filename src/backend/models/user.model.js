import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
  wallet_address: {
    type: String,
    required: true,
    unique: true
  },
  nonce: {
    type: Number,
    required: true,
    unique: true 
  },
  signup_date: {
    type: Date,
    default: Date.now
  }
})

const User = model('User', userSchema)

export default User