const userModel = require("./model");
const bcrypt = require("bcrypt");

function signup (req, res) {

  const body = req.body;

  userModel.findOne({ email: body.email })
    .then((user) => {
      if (user) {
        return res.send("User Already exists with this email");
      } else {
        // body.email
        userModel.create(body)
          .then(() => res.send("User Created Successfully"))
          .catch((error) => {
            console.log(error);
            res.send("Failed to create User");
          });
      }
    });



  console.log('sign up function');
}


function login(req, res) {
  const body = req.body;

  userModel.findOne({email: body.email})
  .then((user) => {
    if(!user) {
      return res.send("No User exist with this email address.")
    }
    console.log(user);
    bcrypt.compare(body.password, user.password)
    .then((isMatch) => {
      if(isMatch) {
        res.send("Login")
      } else {
        res.send("In correct password")
      }
    })
  })

}

module.exports = {
  signup,
  login
};