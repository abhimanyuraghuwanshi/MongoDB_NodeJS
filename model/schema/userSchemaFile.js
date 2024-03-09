//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true,"Name is required"],
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true,"Username is required"],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true,"Password is required"],
    maxlength: 10,
    minlength:5,
    trim: true
  },
  role: Number,
  status: Number
});

// Apply the uniqueValidator plugin to UserSchema.
UserSchema.plugin(uniqueValidator);
// compile schema to model
const userschema = mongoose.model('user_collection',UserSchema);

export default userschema;