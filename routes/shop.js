const express = require("express");
const router = express.Router();
const auth = require("./../middleware/auth");

const User = require("../model/User");

router.get('/list', auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id)
      //console.log(req)
      //console.log(User)
      res.send({shoppinglist: user.shoppinglist})
    } catch (e) {
      res.send({ message: 'Error in Fetching user' });
    }
  });

  router.post('/add', auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id)
      user.shoppinglist.push(req.body.item)
      res.send({shoppinglist: user.shoppinglist})
      await user.save()
    } catch (e) {
      res.send({ message: 'Error in Fetching user' });
    }
  });

  router.delete('/delete', auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id)
      user.shoppinglist = user.shoppinglist.filter(item => item != req.body.item)
      res.send({ shoppinglist: user.shoppinglist})
      await user.save()
    } catch (e) {
      res.send({ message: 'Error in Fetching user' });
    }
  });

  module.exports = router;