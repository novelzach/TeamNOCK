import Mongoose = require("mongoose");

interface iUserModels extends Mongoose.Document {
    fname: String;
    lname: String;
    email: String;
    user: String;
    pass: String;
    tokens: Number;
}
export {iUserModels};
