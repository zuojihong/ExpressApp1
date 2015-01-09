var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuoteSchema = new Schema({
    code: String,
    time: Date,
    price: Number    
});
mongoose.model('Quote', QuoteSchema, 'stocks');

exports.getLatestQuoteByCode = function(req, res) {
    var model = mongoose.model('Quote');
    var code = req.params.code;
    var query = model.find({ code: code }).sort('-time').limit(7);
    query.exec(function(err, quotes) {
        console.log('getLatestByCode returned');
        if (!err) {
            res.send({status: 0, data: quotes});
        } else {
            console.log({status: -1, data: null});
        }
    });
} 