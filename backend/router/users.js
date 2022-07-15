const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.put('/create', async (req, res) => {
  console.log(`accessing this endpoint`);
  try {
    console.log(req.body.email);

    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return res
        .status(400)
        .json({ status: 'error', message: 'duplicate email' });
    }

    const hash = await bcrypt.hash(req.body.password, 12);
    const createdUser = await User.create({
      email: req.body.email,
      hash,
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      gender: req.body.gender,
      age: req.body.age
    });

    console.log("the one made is" + createdUser)
    res.json({ status: "ok", message: 'created' });
  } catch (error) {
    console.log(error);
  }
});

// router.get('/', async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// });

// try later
// router.post('/login', async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     console.log(user);

//     if (!user) {
//       return res
//         .status(400)
//         .json({ status: 'error', message: 'email not found' });
//     }

//     const result = await bcrypt.compare(req.body.password, user.hash)
//     if (result) {
//       return res.json({ status: 'ok', message: 'user logged in ' });
//     } else {
//       return res.json({ status: 'not ok', message: 'wrong password' });
//     }

//   } catch (error) {
//     console.log(error);
//     res.json({ status: 'error', message: 'error is ' + error });
//   }
// });


router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(400)
        .json({ status: "error", message: "not authorised" });
    }

    const result = await bcrypt.compare(req.body.password, user.hash);
    if (!result) {
      console.log("username or password error");
      return res.status(401).json({ status: "error", message: "login failed" });
    }
  
    const payload = {
      id: user._id,
      email: user.email,
    };

    const access = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "20m"
    });
    const refresh = jwt.sign(payload, process.env.REFRESH_SECRET, {
      expiresIn: "30d"
    });
    const response = {
      access,
      refresh,
    };

    res.json(response);
  } catch (error) {
    console.log("POST /users/login", error);
    res.status(400).json({ status: "error", message: "login failed" });
  }
});

router.post("/refresh", (req, res) => {
  try {
    const decoded = jwt.verify(req.body.refresh, process.env.REFRESH_SECRET);
    const payload = {
      id: decoded.id,
      name: decoded.name
    };
    const access = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "20m"
    });

    const response = {
      access,
    };

    res.json(response);
  } catch (error) {
    console.log("POST /users/refresh", error);
    res.status(401).json({
      status: "error",
      message: "unauthorised",
    });
  }
});

// router.patch('/update', async (req, res) => {
//   console.log(`sth`);
//   try {
//     const updatedUser = await User.findOneAndUpdate(
//       { email: req.body.email },
//       { number: req.body.number },
//       { new: true }
//     );
//     console.log(updatedUser);
//     res.json({
//       status: 'ok',
//       message: 'number updated',
//       userThatWasUpdated: updatedUser,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.delete('/delete', async (req, res) => {
//   console.log("hello")
//   try {
//     await User.deleteOne({ email: req.body.email });
//     res.json({ status: "ok", message: "user deleted"});
//   } catch(error) {
//     console.log(error);
//   }
// })

module.exports = router;
