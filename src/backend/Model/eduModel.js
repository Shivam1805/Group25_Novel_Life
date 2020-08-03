// @author : Rishabh Baheti

var mongoose =  require("mongoose");

var EduSchema = new mongoose.Schema({
	name: String,
    hyperlink: String,
    path: String
},
{collection:'eduhelp'});

// EduSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model("eduHelp", EduSchema);
