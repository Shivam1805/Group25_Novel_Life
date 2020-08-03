// @author : Rishabh Baheti

var mongoose =  require("mongoose");

var MentalSchema = new mongoose.Schema({
	name: String,
    hyperlink: String,
    path: String,
    contact: String,
    helptype: String
},
{collection:'mentalhelp'});

// MentalSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model("mentalHelp", MentalSchema);
