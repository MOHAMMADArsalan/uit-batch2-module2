const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, minlength: [3, 'First Name must have 3 characters'], maxlength: 40, required: [true, 'First Name is required'] },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: {
    type: String, required: true, validate: [{
      validator: (value) => {
        let isValid = false;
        if (value.indexOf('a') > -1) {
          isValid = true;
        }
        console.log(value, '3333');
        return isValid;
      },
      msg: 'Password validation failed'
    },
    {
      validator: (value) => {
        let isValid = false;

        if(value.length >= 8) {
          isValid = true
        }

        return isValid;
      },
      msg: 'Password should be greater than or equal to 8 characters'
    }
    ]
  },
  age: { type: Number, max: 65, min: 10, required: true },
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;