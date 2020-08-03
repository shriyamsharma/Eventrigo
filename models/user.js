const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    }, 
    password: {
		type: String
    }   
});


UserSchema.statics.findUser = async function (email, password) {
  const user = await User.findOne({ email });
  if(!user) {
    return;
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch) {
    return;
  }
    return user;
};

UserSchema.pre('save', async function(next) {
  const user = this;
  if(user.isModified("password")){
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;