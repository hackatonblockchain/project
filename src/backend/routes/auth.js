import express from 'express';
import * as ethUtil from 'ethereumjs-util';
import User from '../models/user.model.js';
import UsedNonce from '../models/usednonce.model.js';

import * as jwt from 'jsonwebtoken';
import passport from 'passport';

const router = express.Router();

const nonce = () => {
  return Math.floor(Math.random() * 1000000);
};
router.post('/register', (req, res) => {
  const user = new User();
  user.wallet_address = req.body.wallet_address;

  user.save((err) => {
    if (err) {
      res.status(500).send(err);
      console.log(err);
    }
    res.status(200).send('User successfully registered!');
  });
});
router.get('/:wallet_address/nonce', async (req, res) => {
  User.findOne({ wallet_address: req.params.wallet_address })
    .then(async (user) => {
      if (user) {
        var _nonce;
        do {
          _nonce = nonce();
        } while (await UsedNonce.findOne({ nonce: _nonce }));
        user.nonce = _nonce;
        user.save((err) => {
          if (err) {
            res.status(500).send(err);
            console.log(err);
          }
          UsedNonce.create({ nonce: _nonce });
          res.status(200).send(user.nonce);
        });
      } else {
        res.status(401).send('User not found');
      }
    })
    .catch(console.log);
});

router.post('/:user/signature', (req, res) => {
  User.findOne({ wallet_address: req.params.user }, (err, user) => {
    if (err) {
      res.send(err);
    }
    if (user) {
      const msg = `Nonce: ${user.nonce}`;
      // Convert msg to hex string
      const msgHex = ethUtil.bufferToHex(Buffer.from(msg));

      // Check if signature is valid
      const msgBuffer = ethUtil.toBuffer(msgHex);
      const msgHash = ethUtil.hashPersonalMessage(msgBuffer);
      const signatureBuffer = ethUtil.toBuffer(req.body.signature);
      const signatureParams = ethUtil.fromRpcSig(signatureBuffer);
      const publicKey = ethUtil.ecrecover(
        msgHash,
        signatureParams.v,
        signatureParams.r,
        signatureParams.s
      );
      const addresBuffer = ethUtil.publicToAddress(publicKey);
      const address = ethUtil.bufferToHex(addresBuffer);

      // Check if address matches
      if (address.toLowerCase() === req.params.user.toLowerCase()) {
        // Change user nonce
        user.nonce = nonce();
        user.save(console.log);
        // Set jwt token
        const token = jwt.sign(
          {
            _id: user._id,
            wallet_address: user.wallet_address,
          },
          process.env.JWT_SECRET,
          { expiresIn: '6h' }
        );
        res.status(200).json({
          success: true,
          token: `Bearer ${token}`,
          user: user,
          msg: 'You are now logged in.',
        });
      } else {
        res.status(401).send('Invalid credentials');
      }
    } else {
      res.send('User does not exist');
    }
  });
});

export default router;
