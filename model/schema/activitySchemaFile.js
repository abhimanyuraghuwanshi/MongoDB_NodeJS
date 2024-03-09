//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const activitySchema = new mongoose.Schema({
    userId: String,
    activity: String
});

// Apply the uniqueValidator plugin to UserSchema.
activitySchema.plugin(uniqueValidator);
// compile schema to model
const activityschema = mongoose.model('activities', activitySchema);

export default activityschema;